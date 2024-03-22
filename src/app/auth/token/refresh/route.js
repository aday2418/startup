import { cookies } from 'next/headers'
import setAuthCookie from '../../../../lib/setAuthCookie';

export async function GET(req) {
    const cookieStore = cookies()
    const providerToken = cookieStore.get('providerToken')
    const refreshToken = cookieStore.get('refreshToken')

    const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (new Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken.value,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID
        }),
    }

    console.log({payload})

    const body = await fetch("https://accounts.spotify.com/api/token", payload);
    const response = await body.json();

    console.log({response})

    if(!response.error) {
        setAuthCookie("providerToken", response.access_token)
    }

    return Response.json({ error: null })
}