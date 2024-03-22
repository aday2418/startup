import fetchSpotify from "../../../../lib/fetchSpotify";
import { URL } from "url";
import { cookies } from 'next/headers'


export async function GET(request) {
    const url = new URL(request.url);
    const timeFrame = url.searchParams.get("timeframe"); 

    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    const songs = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=${timeFrame}`)
    return Response.json({ data: songs.items})
}