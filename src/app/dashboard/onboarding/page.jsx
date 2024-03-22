"use client"

import PageInfo from '../PageInfo'
import { randomBytes } from 'crypto';


export default function Onboarding() {

    /*const handleSpotifyLogin = async () => {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        )
      
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'spotify',
          options: {
            redirectTo: (`${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}/auth/callback`),
            scopes: ["user-top-read", "user-read-recently-played"]
          }
        })
    }*/

    const handleSpotifyLogin = async () => {
      const state = randomBytes(16).toString('hex');
      //setAuthCookie("state", state)

      const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: ["user-top-read", "user-read-recently-played"].join(' '),
        redirect_uri: `${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}/auth/callback`,
      }).toString()

      window.location.assign(`https://accounts.spotify.com/authorize?${params}`);
    }

    return (
        <PageInfo title="Onboarding">
            <button onClick={handleSpotifyLogin}>Connect Spotify Account</button>
        </PageInfo>
    )
}