import { mongoClient, mongoCollection } from "../clients/mongo"
import { ObjectId } from "mongodb"

export default async function updateArtists(userId, artists ){
  const client = mongoClient()
  const connection = mongoCollection(client, "users")
    const res = await connection.updateOne({ "_id": new ObjectId(userId) },
    {
      $set: { artists  }
    }
    );
    await client.close()
}