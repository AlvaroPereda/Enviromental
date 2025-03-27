import {MongoClient} from "mongodb"
import { ItemsModel } from "./type.ts";

const url = Deno.env.get("MONGO_URL")
if(!url) throw new Error("con MONGO_URL")

const client = new MongoClient(url)
await client.connect()
console.log("Conectado a mongodb")

const db = client.db("A")
export const ItemsCollection = db.collection<ItemsModel>("items")