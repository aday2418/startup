import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '@/components/icons/Friend'
import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'
import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'
import UserDashboard from './UserDashboard'
import fakeUsers from "./friends/fakeUsers.json"
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr'
import { SpotifyApi } from '@spotify/web-api-ts-sdk';


export default async function Dashboard() {
  const cookieStore = cookies()
  const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
          cookies: {
          get(name) {
              return cookieStore.get(name)?.value
          },
          set(name, value, options) {
              cookieStore.set({ name, value, ...options })
          },
          remove(name, options) {
              cookieStore.set({ name, value: '', ...options })
          },
          },
      }
      )        
  const { data: { session } } = await supabase.auth.getSession()
  const {provider_token, token_type, expires_in, provider_refresh_token } = session
      
  // Spotify API endpoint for fetching user profile data
  const topTracks = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=15&time_range=short_term';
  const topArtists = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=short_term';

  // Setup the authorization header with the access token
  const headers = {
    'Authorization': `Bearer ${provider_token}`
  };

  // Make the API call to get the user's profile data
  const resTracks = await fetch(topTracks, { headers })
  const resArtists = await fetch(topArtists, { headers })

  const dataTracks = await resTracks.json()
  const dataArtists = await resArtists.json()

  return (
    <PageInfo title="Dashboard">
      <UserDashboard songs={dataTracks.items} artists={dataArtists.items}/>
    </PageInfo>
  )
}

