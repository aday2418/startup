import fetchSpotify from "./fetchSpotify"
import updateSongs from "./updateSongs"

export default async function fetchAndUpdateSongs(userId, provider_token){
    if(provider_token){
        const shortData = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=short_term`)
        const mediumData = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=medium_term`)
        const longData = await fetchSpotify(provider_token.value, `/top/tracks?offset=0&limit=50&time_range=long_term`)
        //console.log("!!!!!!!!!!!!!!!!!!!!!")
        //console.log(shortData)
        const shortSongs = shortData.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})
        const mediumSongs = mediumData.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})
        const longSongs = longData.items.map(item => {return {name: item.name, album: item.album.name, image: item.album.images[0], artists: item.artists }})
        const songs = 
        {
            short_term: shortSongs, 
            medium_term: mediumSongs, 
            long_term: longSongs
        }

        await updateSongs(userId, shortSongs, mediumSongs, longSongs)

        return songs
    }
}   