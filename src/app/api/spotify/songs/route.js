import { URL } from "url";
import getUser from "../../../../lib/getUser"
import fetchAndUpdateSongs from "../../../../lib/fetchAndUpdateSongs"
import userIdFromToken from "../../../../lib/userIdFromToken"
import { cookies } from "next/headers"

export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let songs = { 
        short_term: user.shortSongs,
        medium_term: user.mediumSongs,
        long_term: user.longSongs
    }

    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')

    if(provider_token){
        const res = await fetchAndUpdateSongs(userId, provider_token)
        if (res)
            songs = res
    }

    return Response.json({ data: songs})
}