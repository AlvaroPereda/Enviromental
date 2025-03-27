export const getBitcoin = async() => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error(" con API_KEY")
    const url = "https://api.api-ninjas.com/v1/bitcoin"
    const data = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
          }
    })
    const result = await data.json()
    return result.price
}