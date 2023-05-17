const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("api call");
})

app.listen(7000, ()=>{
    console.log(`Server start at http://localhost:${7000}`);
})