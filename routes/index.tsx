import { Handlers, PageProps } from "$fresh/server.ts";
import { FreshContext } from "$fresh/src/server/mod.ts";
import { getBitcoin } from "../utils/api.ts";
import initMongoDB from "../utils/database.ts";
import ItemsCollection from "../utils/database.ts";
import { Items, ItemsModel } from "../utils/type.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Items[]>) => {
    try {
      // Inicializamos MongoDB y obtenemos la colección
      const ItemsCollection = await initMongoDB();
      
      // Consultamos todos los items
      const result: ItemsModel[] = await ItemsCollection.find().toArray();
      
      // Renderizamos los resultados con los cambios necesarios
      return ctx.render(
        result.map((e) => ({
          id: e._id!.toString(),  // Asegúrate de que _id siempre esté presente
          ...e,
        }))
      );
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      return ctx.renderNotFound()
    }
  }
}


export default (props:PageProps<Items[]>) => {
  const aux = Deno.env.get("BUENAS")
  //const bitcoin = await getBitcoin()
  const database = props.data

  return (
    <div>
      <h1>Buenas {aux}</h1>
      <h3>Item: {database[0].name}</h3>
    </div>
  )
}
