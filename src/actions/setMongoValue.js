"use server"

import userIdFromToken from '../lib/userIdFromToken'
import { mongoClient } from '../clients/mongo'
import { mongoCollection } from '../clients/mongo'
import { ObjectId } from 'mongodb'

export async function setMongoValue(key, value){
    //console.log("hello")
    //console.log(value)
    //console.log({ key, value})
    const userId = userIdFromToken()
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    //console.log({ userId })
    connection.updateOne({_id: new ObjectId(userId)}, {$set: {[key] : value}})
}