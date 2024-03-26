import { MongoClient } from 'mongodb'

export function mongoClient() {
    const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}`;
    const client = new MongoClient(url);
    return client;

}