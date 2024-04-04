import { cookies } from "next/headers"
import fetchSpotify from "./fetchSpotify"
import updateArtists from "./updateArtists"

export default async function fetchAndUpdateArtists(userId, provider_token){
    if(provider_token){
        const cookieStore = cookies()
        const provider_token = cookieStore.get('providerToken')
        const shortData = await fetchSpotify(provider_token.value, `/top/artists?offset=0&limit=50&time_range=short_term`)
        const mediumData = await fetchSpotify(provider_token.value, `/top/artists?offset=0&limit=50&time_range=medium_term`)
        const longData = await fetchSpotify(provider_token.value, `/top/artists?offset=0&limit=50&time_range=long_term`)
        const shortArtists = shortData.items.map(item => {return {name: item.name, image: item.images[0], genres: item.genres }})
        const mediumArtists = mediumData.items.map(item => {return {name: item.name, image: item.images[0], genres: item.genres }})
        const longArtists = longData.items.map(item => {return {name: item.name, image: item.images[0], genres: item.genres }})

        const artists = {
            short_term: shortArtists,
            medium_term: mediumArtists,
            long_term: longArtists
        }
        await updateArtists(userId, shortArtists, mediumArtists, longArtists)

        return artists
    }
    
}