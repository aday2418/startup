import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import setAuthCookie from '../../../lib/setAuthCookie';


export async function GET(req) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code")

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}/auth/callback`,
    }).toString(),
  });
  const data = await response.json();
  if (!response.ok) {
    // Handle the error if the token exchange failed
    return Response.json({ error: data.error_description });
  }
  setAuthCookie("providerToken", data.access_token)
  setAuthCookie("refreshToken", data.refresh_token)
  

  //return NextResponse.redirect(origin)
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}`)
}
