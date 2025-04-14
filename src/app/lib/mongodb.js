// lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
	throw new Error("Add Mongo URI to .env");
}

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
