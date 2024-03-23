import { cookies } from "next/headers"
import fetchSpotify from "./fetchSpotify"
import updateProfile from "./updateProfile"

export default async function fetchAndUpdate(userId){
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    const data = await fetchSpotify(provider_token.value)

    const profile = {
        spotify_id: data.id,
        display_name: data.display_name,
        images: data.images     
    }

    await updateProfile(userId, profile)

    return profile
}