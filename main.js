const express=require("express")
const app=express();
const path = require('path');
const mongoose=require("mongoose");

app.set('view engine','ejs');
app.get("/",(req,res)=>{
    const filePath = path.join(__dirname,"index.htm");
    res.redirect('/about');
})
app.get("/about",(req,res)=>{
    const filePath = path.join(__dirname,"home");
    res.render("home");
})
mongoose.connect("mongodb+srv://admin:admin@cluster0.o7ecu58.mongodb.net/aws?retryWrites=true&w=majority").then(()=>{
    console.log("database connect");
}).catch((err)=>{
    console.log(err);
})

app.listen(7001, ()=>{
    console.log(`Server start at http://localhost:${7001}`);
})