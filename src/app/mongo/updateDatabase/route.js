export async function POST(req){
    //if no data in database
    const body = await req.json()
    const username = body.username
    const profile = body.profile
    const songs = body.songs
    const artists = body.artists

    const db = mongoClient()
    const collection = db.collection('users');
    const user = await collection.findOne({ username })

    return Response.json({ error: "Unable To Update Database"})
}