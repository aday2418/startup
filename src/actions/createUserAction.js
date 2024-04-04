"use server"

import { mongoClient, mongoCollection } from "../clients/mongo"
import setAuthCookie from '../lib/setAuthCookie'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function createUser(username, password){
    const client = mongoClient()
    const collection = mongoCollection(client, "users")
    if(await collection.findOne({username})){
        return { error: "Account With This Username Already Exists"}
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        spotify: false,
        darkMode: false,
        friends: [],
        images: [],
        display_name: "Please Update Name In Settings",
        shortSongs: [],
        mediumSongs: [],
        longSongs: [],
        shortArtists: [],
        mediumArtists: [],
        longArtists: []
        
    };

    await collection.insertOne(user);
    await client.close() //Look at this one again

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    setAuthCookie("token", token)
    return {
        error: null
    }
}


