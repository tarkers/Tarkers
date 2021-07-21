'use strict'
const express =require("express")
const cors =require("cors")
const server =express()
const port =9000
const hostname="127.0.0.1"
server.use(cors())
server.get("/",(req,res)=>{
    res.json({data:"rejid"})
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});