import { mongoClient, mongoCollection } from "../clients/mongo"
import { ObjectId } from 'mongodb'

export default async function updateProfile(userId, profile ){
  const {display_name, spotify_id, images} = profile
  const client = mongoClient()
  const connection = mongoCollection(client, "users")


  await connection.updateOne({ _id: new ObjectId(userId )}, 
    {
      $set: { display_name: display_name, spotify_id: spotify_id, images: images, spotify: true, } 
    }
  );
  await client.close()
}