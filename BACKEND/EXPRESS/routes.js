const express= require("express");
const app=express();

let port =8080;

app.listen(port,()=>{
    console.log(`listneing on port ${port}`);
})

// now app.use method listens to all the request and sends same response to all the pages..
// nut we want different response to different routes..
// so we use get method.. which takes a path and callback as agrguement
// path decides to which route reponse is to send and callback gives what response to send..!!

// there is only one response for 1 path
app.get("/",(req,res)=>{
    console.log("request recieved");
    res.send("you contacted root path ")
});

app.get("/apple",(req,res)=>{
    console.log("request recieved");
    res.send("you contacted apple path ")
});

app.get("/orange",(req,res)=>{
    console.log("request recieved");
    res.send("you contacted orange path ");
});

// now if user made get request to route that doesn't exist.. so we can define that path by '*'

app.get("*",(req,res)=>{
    res.send("page doesnt exist");
})
