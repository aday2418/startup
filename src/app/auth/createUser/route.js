import { mongoClient, mongoCollection } from "../../../clients/mongo"
import bcrypt from 'bcrypt'
import setAuthCookie from '../../../lib/setAuthCookie'
import jwt from 'jsonwebtoken'

export async function POST(req){
    const body = await req.json()
    const username = body.username
    const password = body.password


    const client = mongoClient()
    const collection = mongoCollection(client, "users")

    
    if(await collection.findOne({username})){
        return Response.json({ error: "Account With This Username Already Exists"})
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        spotify: false,
        darkMode: false,
        friends: [],
        images: [],
        display_name: "No Name",
        
    };

    await collection.insertOne(user);
    await client.close() //Look at this one again

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    setAuthCookie("token", token)
    return Response.json({
        token
    })
}
