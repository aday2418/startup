import jwt from 'jsonwebtoken';
import authenticate from '../../../lib/authenticate';

export async function POST(req) {
  const {token} = await req.json()  
  const data = authenticate(token)

  return Response.json({ data })
}
