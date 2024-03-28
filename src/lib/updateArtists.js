import { mongoClient, mongoCollection } from "../clients/mongo"
import { ObjectId } from "mongodb"

export default async function updateArtists(userId, shortArtists, mediumArtists, longArtists ){
  const client = mongoClient()
  const connection = mongoCollection(client, "users")
    const res = await connection.updateOne({ "_id": new ObjectId(userId) },
    {
      $set: { shortArtists, mediumArtists, longArtists  }
    }
    );
    await client.close()
}