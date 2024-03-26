import { mongoClient } from "../clients/mongo"
import { ObjectId } from "mongodb"

export default async function updateSongs(userId, songs ){
    const client = mongoClient()
    const db = client.db('soundcircle')
    const connection = db.collection('users');
    const res = await connection.updateOne({ "_id": new ObjectId(userId) },
    {
      $set: { songs  }
    }
    );
    await client.close()
}