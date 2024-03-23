import fetchAndUpdateArtists from "../../../../lib/fetchAndUpdateArtists"
import getUser from "../../../../lib/getUser"
import userIdFromToken from "../../../../lib/userIdFromToken"



export async function GET(request) {
    const url = new URL(request.url);
    const timeFrame = url.searchParams.get("timeframe");
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let artists
    if(user?.artists) { 
        artists = user.artists

        fetchAndUpdateArtists(userId, timeFrame)
    } else {
        artists = await fetchAndUpdateArtists(userId, timeFrame)
    }

    return Response.json({ data: artists})
}
