import { cookies } from "next/headers"
import fetchSpotify from "./fetchSpotify"
import updateProfile from "./updateProfile"

export default async function fetchAndUpdate(userId, username, friends){
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    const data = await fetchSpotify(provider_token.value)

    const profile = {
        spotify_id: data.id,
        display_name: data.display_name,
        username: username,
        images: data.images,
        friends: friends    
    }

    await updateProfile(userId, profile)

    return profile
}