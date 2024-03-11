import { supabaseServerClient } from "@/clients/supabase";
import fetchSpotify from "@/lib/fetchSpotify";

export async function GET(request) {
    
    const supabase = supabaseServerClient()        
    const { data: { session } } = await supabase.auth.getSession()
    const {provider_token, token_type, expires_in, provider_refresh_token } = session
    const profile = await fetchSpotify(provider_token)
    return Response.json({ data: profile.id})



    /*
    const headers = {
      'Authorization': `Bearer ${provider_token}`,
    };

    const topTracksShort = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50&time_range=short_term';
    const topArtistsShort = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=short_term';
    const topTracksMedium = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50&time_range=medium_term';
    const topArtistsMedium = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=medium_term';
    const topTracksLong = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=50&time_range=long_term';
    const topArtistsLong = 'https://api.spotify.com/v1/me/top/artists?offset=0&limit=15&time_range=long_term';
    const profile = 'https://api.spotify.com/v1/me';
  
  
    // Setup the authorization header with the access token
    
  
    // Make the API call to get the user's profile data
    const resTracksShortPromise = fetch(topTracksShort, { headers }).then(res => res.json())
    const resArtistsShortPromise = fetch(topArtistsShort, { headers }).then(res => res.json())
    const resTracksMediumPromise = fetch(topTracksMedium, { headers }).then(res => res.json())
    const resArtistsMediumPromise = fetch(topArtistsMedium, { headers }).then(res => res.json())
    const resTracksLongPromise = fetch(topTracksLong, { headers }).then(res => res.json())
    const resArtistsLongPromise = fetch(topArtistsLong, { headers }).then(res => res.json())
    const resProfilePromise = fetch(profile, {headers}).then(res => res.json())
  
    const [resTracksShort, resArtistsShort, resTracksMedium, resArtistsMedium, resTracksLong, resArtistsLong, resProfile] = await Promise.all([resTracksShortPromise, resArtistsShortPromise, resTracksMediumPromise, resArtistsMediumPromise, resTracksLongPromise, resArtistsLongPromise, resProfilePromise])
  
    const songs = [resTracksShort.items, resTracksMedium.items, resTracksLong.items]
    const artists = [resArtistsShort.items, resArtistsMedium.items, resArtistsLong.items]
    const spotifyUsername = resProfile.id

    return Response.json({ songs, artists, spotifyUsername })*/
}