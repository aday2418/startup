import { mongoClient, mongoCollection } from "../clients/mongo"

export default async function getUser(userId){
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    const users = await (await connection.find()).toArray()
    const user = await connection.findOne({username: "12345"})

    //console.log(users)

    //console.log(userId)
    //console.log({user})
    await client.close()
    return user
}