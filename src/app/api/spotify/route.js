
import getUser from "../../../lib/getUser"
import fetchAndUpdate from "../../../lib/fetchAndUpdate"
import userIdFromToken from "../../../lib/userIdFromToken"
import { cookies } from "next/headers"


export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let profile = {
        spotify_id: user.spotify_id,
        display_name: user.display_name,
        username: user.username,
        images: user.images,
        friends: user.friends
    }
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')

    if(provider_token){
        const res = await fetchAndUpdate(userId, user.username, user.friends, provider_token)
        if (res)
            profile = res
    }

    return Response.json({ data: profile})

}