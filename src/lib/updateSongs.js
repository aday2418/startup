import { mongoClient, mongoCollection } from "../clients/mongo"
import { ObjectId } from "mongodb"

export default async function updateSongs(userId, songs ){
  const client = mongoClient()
  const connection = mongoCollection(client, "users")
    const res = await connection.updateOne({ "_id": new ObjectId(userId) },
    {
      $set: { songs  }
    }
    );
    await client.close()
}