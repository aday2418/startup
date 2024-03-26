import { mongoClient } from "../clients/mongo"

export default async function getUser(userId){
    const client = mongoClient()
    const db = client.db('soundcircle')
    const connection = db.collection('users');
    const user = await connection.findOne({_id: userId})
    console.log({user})
    await client.close()
    console.log({user})
    return user
}