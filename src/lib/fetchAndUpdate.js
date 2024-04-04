import fetchSpotify from "./fetchSpotify"
import updateProfile from "./updateProfile"

export default async function fetchAndUpdate(userId, username, friends, provider_token){
    if(provider_token){
        const data = await fetchSpotify(provider_token.value)

        const spotifyProfile = {
            spotify_id: data.id,
            display_name: data.display_name,
            username: username,
            images: data.images,
            friends: friends    
        }
    
        await updateProfile(userId, spotifyProfile)
        return spotifyProfile
    }
}