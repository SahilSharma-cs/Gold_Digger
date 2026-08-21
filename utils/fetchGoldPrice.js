export const goldPrice = async() =>{
    const res = await fetch("https://api.gold-api.com/price/XAU/USD")
    const data = await res.json()
        return {"price": data.price}
  
}
