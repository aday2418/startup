import { supabaseServerClient } from "@/clients/supabase";
import fetchSpotify from "@/lib/fetchSpotify";
import { URL } from "url";

export async function GET(request) {
    const url = new URL(request.url);
    const timeFrame = url.searchParams.get("timeframe"); 

    const supabase = supabaseServerClient()        
    const { data: { session } } = await supabase.auth.getSession()
    const {provider_token, token_type, expires_in, provider_refresh_token } = session
    const songs = await fetchSpotify(provider_token, `/top/tracks?offset=0&limit=50&time_range=${timeFrame}`)
    return Response.json({ data: songs.items})
}