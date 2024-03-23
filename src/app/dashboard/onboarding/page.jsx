"use client"

import { useEffect } from 'react';
import PageInfo from '../PageInfo'
import { randomBytes } from 'crypto';


export default function Onboarding() {
    useEffect(() => {
        handleSpotifyLogin()
    }, [])
    
    const handleSpotifyLogin = async () => {
        const state = randomBytes(16).toString('hex');

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