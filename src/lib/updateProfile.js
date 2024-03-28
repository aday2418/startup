import { mongoClient, mongoCollection } from "../clients/mongo"

export default async function updateProfile(userId, profile ){
  const {display_name, spotify_id, images} = profile
  const client = mongoClient()
    const connection = mongoCollection(client, "users")

  await connection.updateOne({ "_id": userId }, // Filter criteria: matches the user with username 'john_doe'
    {
      $set: { display_name, spotify_id, images, spotify: true  } // Update operation: sets new email and age
    }
  );
  await client.close()
}