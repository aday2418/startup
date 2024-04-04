"use server"

import { mongoClient, mongoCollection } from "../clients/mongo"
import setAuthCookie from '../lib/setAuthCookie'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function login(username, password){
    const client = mongoClient()
    const collection = mongoCollection(client, "users")
    const user = await collection.findOne({ username })

    if(user && await bcrypt.compare(password, user.password)){
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        setAuthCookie("token", token)
        return { error: null}
    }

    await client.close()

    return {error: "Invalid username or password"}
}

