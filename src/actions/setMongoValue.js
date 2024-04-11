"use server"

import userIdFromToken from '../lib/userIdFromToken'
import { mongoClient } from '../clients/mongo'
import { mongoCollection } from '../clients/mongo'
import { ObjectId } from 'mongodb'

export async function setMongoValue(key, value){
    const userId = userIdFromToken()
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    connection.updateOne({_id: new ObjectId(userId)}, {$set: {[key] : value}})
    await client.close()
};

export async function addMongoFriend(newFriend, self){
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    const res = await connection.updateOne(
        { username: self }, 
        {$push: { friends : newFriend }}
      );
    const res2 = await connection.updateOne(
        { username: newFriend }, 
        {$push: { friends : self }}
      );
    await client.close()

}

export async function removeMongoFriend(friendToRemove, self) {
    console.log("In remove function")
    const client = mongoClient();
    const connection = mongoCollection(client, "users");
    console.log("remove friend function")
    console.log(self, friendToRemove)

    // Remove `friendToRemove` from the `self` user's friends list
    const res1 = await connection.updateOne(
        { username: self }, 
        { $pull: { friends:  friendToRemove  } }
    );

    // Remove `self` from the `friendToRemove` user's friends list
    const res2 = await connection.updateOne(
        { username: friendToRemove },
        { $pull: { friends:  self  } }
    );

    console.log(res1, res2)


    await client.close();

}