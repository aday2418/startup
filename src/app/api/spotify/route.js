
import getUser from "../../../lib/getUser"
import fetchAndUpdate from "../../../lib/fetchAndUpdate"
import userIdFromToken from "../../../lib/userIdFromToken"

export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)
    let profile

    if(user?.spotify) { 
        profile = {
            spotify_id: user.spotify_id,
            display_name: user.display_name,
            username: user.username,
            images: user.images
        }

        fetchAndUpdate(userId, user.username)
    } else {
        profile = await fetchAndUpdate(userId, user.username)
    }

    return Response.json({ data: profile})

}