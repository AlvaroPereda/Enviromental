import { MongoClient } from "mongodb";
import { ItemsModel } from "./type.ts";

// Función para conectar a MongoDB
async function initMongoDB() {
  const url = Deno.env.get("MONGO"); // Obtener la URL de MongoDB desde las variables de entorno
  console.log("URL de MongoDB:", url); // Verifica la URL
  
  if (!url) {
    throw new Error("MONGO_URL no definida"); // Lanza un error si la variable no está definida
  }

  const client = new MongoClient(url); // Crear una instancia del cliente de MongoDB
  await client.connect(); // Conectar al servidor MongoDB
  console.log("Conectado a MongoDB");

  const db = client.db("A"); // Seleccionar la base de datos
  const ItemsCollection = db.collection<ItemsModel>("items"); // Seleccionar la colección "items"

  return ItemsCollection; // Devuelve la colección
}

export default initMongoDB; // Exportar la función
