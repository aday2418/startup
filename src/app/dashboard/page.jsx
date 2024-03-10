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
  const topTracksShort = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50&time_range=short_term';
  const topArtistsShort = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=short_term';
  const topTracksMedium = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50&time_range=medium_term';
  const topArtistsMedium = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=medium_term';
  const topTracksLong = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50&time_range=long_term';
  const topArtistsLong = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=long_term';


  // Setup the authorization header with the access token
  const headers = {
    'Authorization': `Bearer ${provider_token}`,
  };

  // Make the API call to get the user's profile data
  const resTracksShortPromise = fetch(topTracksShort, { headers }).then(res => res.json())
  const resArtistsShortPromise = fetch(topArtistsShort, { headers }).then(res => res.json())
  const resTracksMediumPromise = fetch(topTracksMedium, { headers }).then(res => res.json())
  const resArtistsMediumPromise = fetch(topArtistsMedium, { headers }).then(res => res.json())
  const resTracksLongPromise = fetch(topTracksLong, { headers }).then(res => res.json())
  const resArtistsLongPromise = fetch(topArtistsLong, { headers }).then(res => res.json())

  const [resTracksShort, resArtistsShort, resTracksMedium, resArtistsMedium, resTracksLong, resArtistsLong] = await Promise.all([resTracksShortPromise, resArtistsShortPromise, resTracksMediumPromise, resArtistsMediumPromise, resTracksLongPromise, resArtistsLongPromise])

/*
  const dataTracksShort = await resTracksShort.json()
  const dataArtistsShort = await resArtistsShort.json()
  const dataTracksMedium = await resTracksMedium.json()
  const dataArtistsMedium = await resArtistsMedium.json()
  const dataTracksLong = await resTracksLong.json()
  const dataArtistsLong = await resArtistsLong.json()
  */

  const songs = [resTracksShort.items, resTracksMedium.items, resTracksLong.items]
  const artists = [resArtistsShort.items, resArtistsMedium.items, resArtistsLong.items]

  return (
    <PageInfo title="Dashboard">
      <UserDashboard songs={songs} artists={artists}/>
    </PageInfo>
  )
}

