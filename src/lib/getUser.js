import { mongoClient } from "../clients/mongo"

export default async function getUser(userId){
    const db = mongoClient()
    const connection = db.collection('users');
    return await connection.findOne({_id: userId})
}