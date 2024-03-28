import fetchAndUpdateArtists from "../../../../lib/fetchAndUpdateArtists"
import getUser from "../../../../lib/getUser"
import userIdFromToken from "../../../../lib/userIdFromToken"



export async function GET(request) {
    const url = new URL(request.url);
    //const timeFrame = url.searchParams.get("timeframe");
    const userId = userIdFromToken()
    const user = await getUser(userId)

    let artists
    if(user?.artists) { 
        //artists = user.artists
        artists = {
            short_term: user.shortArtists,
            medium_term: user.mediumArtists,
            long_term: user.longArtists
        }
        console.log(artists)

        fetchAndUpdateArtists(userId)
    } else {
        artists = await fetchAndUpdateArtists(userId)
    }

    return Response.json({ data: artists})
}
