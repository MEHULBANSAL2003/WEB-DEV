const express=require("express");
const app=express();
const port=8080;

// middleware
// app.use('/',(req,res)=>{
//     console.log("i m middleware");
// })

// another syntax for middlewares.. to be passed as a function


const checktoken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED..!!")
}

app.get("/api",checktoken,(req,res)=>{
    res.send("hello.. u are authorized");
})
app.get("/",(req,res)=>{
    res.send("hi i m root");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})