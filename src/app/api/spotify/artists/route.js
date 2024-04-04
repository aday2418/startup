import fetchAndUpdateArtists from "../../../../lib/fetchAndUpdateArtists"
import getUser from "../../../../lib/getUser"
import userIdFromToken from "../../../../lib/userIdFromToken"
import { cookies } from "next/headers"


export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let artists = {
        short_term: user.shortArtists,
        medium_term: user.mediumArtists,
        long_term: user.longArtists
    }

    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')

    if(provider_token) { 
        const res = await fetchAndUpdateArtists(userId, provider_token)
        if (res)
            artists = res
    } 

    return Response.json({ data: artists})
}
