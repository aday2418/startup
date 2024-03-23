import { cookies } from 'next/headers'
import fetchSpotify from "../../../lib/fetchSpotify";
import getUser from "../../../lib/getUser"
import updateProfile from "../../../lib/updateProfile"
import fetchAndUpdate from "../../../lib/fetchAndUpdate"
import authenticate from '../../../lib/authenticate';
import userIdFromToken from "../../../lib/userIdFromToken"

export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let profile
    if(user?.spotify) { 
        profile = {
            spotify_id: user.spotify_id,
            display_name: user.display_name,
            images: user.images
        }

        fetchAndUpdate(userId)
    } else {
        profile = await fetchAndUpdate(userId)
    }

    return Response.json({ data: profile})

}