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
    const client = mongoClient();
    const connection = mongoCollection(client, "users");
    //console.log(self, friendToRemove)

    // Remove from both yours and your friends lists of friends
    const res1 = await connection.updateOne(
        { username: self }, 
        { $pull: { friends:  friendToRemove  } }
    );

    const res2 = await connection.updateOne(
        { username: friendToRemove },
        { $pull: { friends:  self  } }
    );

    console.log(res1, res2)


    await client.close();

}