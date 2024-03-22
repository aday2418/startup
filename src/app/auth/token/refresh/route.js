import { cookies } from 'next/headers'

export async function GET(req) {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')

    const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID
        }),
      }
      const body = await fetch("https://accounts.spotify.com/api/token", payload);
      const response = await body.json();

      setAuthCookie("providerToken", response.access_token)
      setAuthCookie("refreshToken", response.refresh_token)


}