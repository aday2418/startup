"use server"

import userIdFromToken from '../lib/userIdFromToken'
import { mongoClient } from '../clients/mongo'
import { mongoCollection } from '../clients/mongo'
import { ObjectId } from 'mongodb'
import Friend from '../components/icons/Friend'

export async function setMongoValue(key, value){
    //console.log("hello")
    //console.log(value)
    //console.log({ key, value})
    const userId = userIdFromToken()
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    //console.log({ userId })
    connection.updateOne({_id: new ObjectId(userId)}, {$set: {[key] : value}})
    await client.close()
};

export async function addMongoFriend(newFriend, self){
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    //console.log("My username", self.username)
    //console.log("Friends username", newFriend.username)
    const res = await connection.updateOne(
        { username: self.username }, // Filter document by some unique identifier, e.g., _id
        {$push: { friends : newFriend }}
      );
    const res2 = await connection.updateOne(
        { username: newFriend.username }, // Filter document by some unique identifier, e.g., _id
        {$push: { friends : self }}
      );
    await client.close()

}

export async function removeMongoFriend(friendToRemove, self) {
    const client = mongoClient();
    const connection = mongoCollection(client, "users");

    // Remove `friendToRemove` from the `self` user's friends list
    const res1 = await connection.updateOne(
        { username: self.username }, // Filter document by some unique identifier, e.g., username
        { $pull: { friends: { username: friendToRemove.username } } }
    );

    // Remove `self` from the `friendToRemove` user's friends list
    const res2 = await connection.updateOne(
        { username: friendToRemove.username }, // Filter document by some unique identifier, e.g., username
        { $pull: { friends: { username: self.username } } }
    );

    await client.close();

}