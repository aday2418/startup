import { mongoClient } from "../../../clients/mongo"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import setAuthCookie from '../../../lib/setAuthCookie'

export async function POST(req){
    const body = await req.json()
    const username = body.username
    const password = body.password

    console.log({ username, password})

    const db = mongoClient()
    const collection = db.collection('users');

    
    if(await collection.findOne({username})){
        return Response.json({ error: "Account With This Username Already Exists"})
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuidv4()
    };

    await collection.insertOne(user);

    setAuthCookie(user.token)

    return Response.json({
        id: user._id,
    })
}