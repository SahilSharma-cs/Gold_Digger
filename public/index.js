const priceDisplay = document.getElementById('price-display')
console.log("js is running")
try{
    const data = await fetch('/price')
    const response = await data.json()
    console.log(response)
    priceDisplay.textContent = response.price
}
catch(err){
    console.log(err)
}