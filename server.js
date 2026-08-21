import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGoldPrice } from './handlers/routeHndler.js'

const __dirname = import.meta.dirname
const PORT = 8000 

const server = http.createServer(async (req,res) => {
    if(req.url === '/price'){
        return await handleGoldPrice(res)
    }
    else if(!req.url.startsWith('/price')){
        return await serveStatic(req,res,__dirname)
    }  
})

server.listen(PORT , () => console.log(`Port is Connected to http://localhost:${PORT}`))