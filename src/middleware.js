import { cookies } from 'next/headers';
import redirect from './lib/redirect';


export async function middleware(req) { //Change this to verify Supabase Session + MongoDB
  const token = cookies().get("token")
  if(!token) {
    return Response.redirect(redirect())
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}/auth/token`, {
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
