import { supabaseServerClient } from "@/clients/supabase";
import fetchSpotify from "@/lib/fetchSpotify";

export async function GET(request) {
    
    const supabase = supabaseServerClient()        
    const { data: { session } } = await supabase.auth.getSession()
    const {provider_token, token_type, expires_in, provider_refresh_token } = session
    const profile = await fetchSpotify(provider_token)
    return Response.json({ data: profile.id})

}