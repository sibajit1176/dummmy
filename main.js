const express=require("express")
const app=express();
const path = require('path');
const ejs = require("ejs");

app.set('view engine','ejs');
app.get("/",(req,res)=>{
    const filePath = path.join(__dirname,"index.htm");
    res.redirect('/about');
})
app.get("/about",(req,res)=>{
    const filePath = path.join(__dirname,"home");
    res.render("home");
})

app.listen(7001, ()=>{
    console.log(`Server start at http://localhost:${7001}`);
})