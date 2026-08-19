import { sendResponse } from './sendResponse.js'
import path from 'node:path'
import fs from 'fs/promises'
import { getContentType } from './getContentType.js'

export const serveStatic = async (req,res,baseDir) =>{
    const publicDir = path.join(baseDir,'public')
    const filePath = path.join(publicDir , 
        req.url==='/' ?'index.html' : req.url)
    const ext = path.extname(filePath)
    const contentType = getContentType(ext)
    try{
        const content = await fs.readFile(filePath)
        sendResponse(res,200,contentType,content)
    }
    catch(err){
        if(req.code === 'ENOENT'){
            sendResponse(res,400,'text/html','404.html')
        }
        else{
            sendResponse(res,500,'text/html',`<html><h1>Server Error: ${err.code}</h1></html>`)
        }
    }
}
