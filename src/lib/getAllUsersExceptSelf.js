import { mongoClient, mongoCollection } from "../clients/mongo"
import { ObjectId } from 'mongodb';


export default async function getAllUsersExceptSelf(userId){
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    const allUsers = await connection.find({
        _id: { $ne: new ObjectId(userId) }
         // Use $ne (not equal) operator to exclude the user } // Ensure shortSongs exists and is not null
    }).toArray();
    await client.close()
    return allUsers
}