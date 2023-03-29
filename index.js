const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.");
})
app.get("/about",(req,res)=>{
    res.send(JSON.stringify({name:'Kapadam Dharani',age:22,Role:"Fullstack Web Developer"}));

})
app.listen(8055,()=>{
    console.log("server is running")
})