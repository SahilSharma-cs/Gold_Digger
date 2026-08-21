import { goldPrice } from "../utils/fetchGoldPrice.js";
import { sendResponse } from "../utils/sendResponse.js";

export const handleGoldPrice = async (res) =>{
    const price = await goldPrice()
    const content = JSON.stringify(price)
    sendResponse(res,200,'application/json',content)
}