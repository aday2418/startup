import fetchSpotify from "../../../../lib/fetchSpotify";
import { cookies } from 'next/headers'


export async function GET(request) {
    const url = new URL(request.url);
    const timeFrame = url.searchParams.get("timeframe"); 

    console.log(timeFrame)
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    //Calling The Spotify API Below!!
    const artists = await fetchSpotify(provider_token.value, `/top/artists?offset=0&limit=15&time_range=${timeFrame}`) 
    return Response.json({ data: artists.items})
}
