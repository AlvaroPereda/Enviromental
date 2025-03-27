
export default function Home() {
  const aux = Deno.env.get("BUENAS")
  return (
    <div>
      <h1>Buenas {aux}</h1>
    </div>
  )
}
