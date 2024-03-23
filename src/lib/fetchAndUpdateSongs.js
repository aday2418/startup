import { cookies } from "next/headers"
import fetchSpotify from "./fetchSpotify"
import updateSongs from "./updateSongs"

export default async function fetchAndUpdateSongs(userId, timeFrame){
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    const data = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=${timeFrame}`)
    const songs = data.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})

    await updateSongs(userId, songs)

    return songs
}