import { cookies } from 'next/headers';
import authenticate from './lib/authenticate';
import redirect from './lib/redirect';

export async function middleware(req) { //Change this to verify Supabase Session + MongoDB
  const token = cookies().get("token")
  console.log({token})

  if(!token) {
    return Response.redirect(redirect())
  }

  const response = await fetch("http://localhost:3000/auth/token", {
    method: "POST",
    body: JSON.stringify({ token: token.value})
  })

  const { data: authenticated } = await response.json()

  if(!authenticated) {
    return Response.redirect(redirect())
  }
}

    // Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
}