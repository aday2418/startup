import { URL } from "url";
import getUser from "../../../../lib/getUser"
import fetchAndUpdateSongs from "../../../../lib/fetchAndUpdateSongs"
import userIdFromToken from "../../../../lib/userIdFromToken"

export async function GET(request) {
    const url = new URL(request.url);
    const timeFrame = url.searchParams.get("timeframe");
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let songs
    if(user?.songs) { 
        songs = [user.shortSongs, user.mediumSongs, user.longSongs] //changed this!!
        fetchAndUpdateSongs(userId, timeFrame)
    } else {
        songs = await fetchAndUpdateSongs(userId, timeFrame)
    }

    return Response.json({ data: songs})
}