import { mongoClient, mongoCollection } from '../clients/mongo'; // Adjust this import according to your actual utilities' paths

// Function to fetch users by an array of usernames
export default async function getFriends(usernames) {
    const client = mongoClient();
    const connection = mongoCollection(client, "users");
    //console.log({usernames})
    const friends = await connection.find({
        username: { $in: usernames } // Use $in to find documents where the username matches any in the usernames array
    }).toArray();

    //console.log({friends})

    await client.close();
    return friends;
}