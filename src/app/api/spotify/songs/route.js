import { URL } from "url";
import getUser from "../../../../lib/getUser"
import fetchAndUpdateSongs from "../../../../lib/fetchAndUpdateSongs"
import userIdFromToken from "../../../../lib/userIdFromToken"

export async function GET(request) {
    //const url = new URL(request.url);
    //const timeFrame = url.searchParams.get("timeframe");
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let songs
    if(user?.shortSongs && user?.mediumSongs && user?.longSongs ) { 
        songs = {
            short_term: user.shortSongs,
            medium_term: user.mediumSongs,
            long_term: user.longSongs
        }
        //console.log({songs})
        fetchAndUpdateSongs(userId)
    } else {
        songs = await fetchAndUpdateSongs(userId)
    }

    return Response.json({ data: songs})
}