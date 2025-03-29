import { MongoClient } from "mongodb"
import { ItemsModel } from "./type.ts";

const url = Deno.env.get("MONGO")
console.log("URL de MongoDB:", url); // Verifica la URL
if(!url) throw new Error("con MONGO_URL")

const client = new MongoClient(url)
await client.connect()
console.log("Conectado a mongodb")

const db = client.db("A")
const ItemsCollection = db.collection<ItemsModel>("items")

export default ItemsCollection;