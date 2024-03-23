import { mongoClient } from "../clients/mongo"
import { ObjectId } from "mongodb"

export default async function updateArtists(userId, artists ){
    const db = mongoClient()
    const connection = db.collection('users');
    const res = await connection.updateOne({ "_id": new ObjectId(userId) },
    {
      $set: { artists  }
    }
    );
}