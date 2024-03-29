import { mongoClient, mongoCollection } from "../clients/mongo"
import { ObjectId } from 'mongodb';


export default async function getUser(userId){
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    const user = await connection.findOne({_id: new ObjectId(userId)})
    
    await client.close()
    return user
}