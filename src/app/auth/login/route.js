"use server"

import { mongoClient } from "../../../clients/mongo"
import setAuthCookie from '../../../lib/setAuthCookie'
import bcrypt from 'bcrypt'


export async function POST(req, res){
    const body = await req.json()
    const username = body.username
    const password = body.password

    const db = mongoClient()
    const collection = db.collection('users');
    const user = await collection.findOne({ username })

    if(user && await bcrypt.compare(password, user.password)){
        setAuthCookie(user.token)
        return Response.json({ id: user._id })
    }
    
    return Response.json({ error: "Username or Password is incorrect"})
}

/*apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});*/