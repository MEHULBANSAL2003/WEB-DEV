const express=require("express");
const app=express();
const port=8080;
const ExpressError=require("./ExpressError");

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
    //res.send("ACCESS DENIED..!!")
    // we want to thorw the error
    throw new ExpressError(401,"ACCESS DENIED..!!");  // throwing custom errors 
}

app.get("/api",checktoken,(req,res)=>{
    res.send("hello.. u are authorized");
})
app.get("/",(req,res)=>{
    res.send("hi i m root");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
})

app.use((err,req,res,next)=>{
    let{status=500,message="SOME ERROR OCCURED"}=err;  // here status is set to 500 if status is undefined as for page /err no error with status code is thrown
    res.status(status).send(message); 
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})