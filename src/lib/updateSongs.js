import { mongoClient } from "../clients/mongo"
import { ObjectId } from "mongodb"

export default async function updateSongs(userId, songs ){
    const db = mongoClient()
    const connection = db.collection('users');
    const res = await connection.updateOne({ "_id": new ObjectId(userId) },
    {
      $set: { songs  }
    }
    );
}