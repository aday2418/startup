import { supabaseServerClient } from "@/clients/supabase";
import fetchSpotify from "@/lib/fetchSpotify";

export async function GET(request) {
    const url = new URL(request.url);
    const timeFrame = url.searchParams.get("timeframe"); 

    console.log(timeFrame)
    const supabase = supabaseServerClient()        
    const { data: { session } } = await supabase.auth.getSession()
    const {provider_token, token_type, expires_in, provider_refresh_token } = session
    const artists = await fetchSpotify(provider_token, `/top/artists?offset=0&limit=15&time_range=${timeFrame}`) //Calling The Spotify API Here!!
    return Response.json({ data: artists.items})
}
