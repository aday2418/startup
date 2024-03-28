import { cookies } from "next/headers"
import fetchSpotify from "./fetchSpotify"
import updateSongs from "./updateSongs"

export default async function fetchAndUpdateSongs(userId, timeFrame){
    const cookieStore = cookies()
    const provider_token = cookieStore.get('providerToken')
    const shortData = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=short_term`)
    const mediumData = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=medium_term`)
    const longData = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=long_term`)
    const shortSongs = shortData.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})
    const mediumSongs = mediumData.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})
    const longSongs = longData.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})
    const songs = [shortSongs, mediumSongs, longSongs]

    await updateSongs(userId, shortSongs, mediumSongs, longSongs)

    return songs
}