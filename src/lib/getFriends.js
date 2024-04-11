import { mongoClient, mongoCollection } from '../clients/mongo'; 

export default async function getFriends(usernames) {
    const client = mongoClient();
    const connection = mongoCollection(client, "users");
    //console.log({usernames})
    const friends = await connection.find({
        username: { $in: usernames } 
    }).toArray();

    await client.close();
    return friends;
}