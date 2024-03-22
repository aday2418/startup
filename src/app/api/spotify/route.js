import { cookies } from 'next/headers'
import fetchSpotify from "../../../lib/fetchSpotify";


export async function GET(request) {
    
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    console.log({provider_token})

    const profile = await fetchSpotify(provider_token.value)
    return Response.json({ data: profile})

}