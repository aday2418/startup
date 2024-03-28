import { mongoClient, mongoCollection } from "../clients/mongo"

export default async function getUser(userId){
    const client = mongoClient()
    const collection = mongoCollection(client, "users")
}