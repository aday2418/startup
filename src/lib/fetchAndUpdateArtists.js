import { cookies } from "next/headers"
import fetchSpotify from "./fetchSpotify"
import updateArtists from "./updateArtists"

export default async function fetchAndUpdateArtists(userId, timeFrame){
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    const data = await fetchSpotify(provider_token.value, `/top/artists?offset=0&limit=15&time_range=${timeFrame}`)
    const artists = data.items.map(item => {return {name: item.name, image: item.images[0], genres: item.genres }})

    await updateArtists(userId, artists)

    return artists
}