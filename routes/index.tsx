import { getBitcoin } from "../utils/api.ts";

export default async function Home() {
  const aux = Deno.env.get("BUENAS")
  const bitcoin = await getBitcoin()
  return (
    <div>
      <h1>Buenas {aux}</h1>
      <h3>Price: {bitcoin}</h3>
    </div>
  )
}
