const express=require("express")
const app=express();
const path = require('path');
const port = process.env.port || 7000;

app.get("/",(req,res)=>{
    const filePath = path.join(__dirname,"index.htm");
    res.sendFile(filePath);
})

app.listen(7000, ()=>{
    console.log(`Server start at http://localhost:${7001}`);
})