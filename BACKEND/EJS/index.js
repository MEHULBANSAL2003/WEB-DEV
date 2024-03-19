const express=require("express");
const app=express();
const path=require("path");
const port=8080;


// using ejs

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));  // syntax for running server from different directory and still rendering ejs files

// app.get("/",(req,res)=>{
//     console.log("request recieved");
//     res.send("this is basic response");
// })

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

// int ejs we render the response.. not send
// render basically means sending the files and we send the ejs file

app.get("/",(req,res)=>{
    res.render("home.ejs");  // res.render automatically search for views folder and find home.ejs directly into it... 
    // we dont need to provide the path explicitly fot home.ejs 
})



/*
here we can also run our index.js file in ejs directory  from backend directory by writirn "node ejs/index.js";
but the problem is now res.rendor will look for views folder inside backend but it is not present there..
to overcome this... we use path.. first we require it.. then use it.. 
as used above  
 */



// parsing data to EJS

// during projects we will be getting data from our database so to render the data value to ejs.. following syntax is used.!1
app.get("/rolldice",(req,res)=>{
    console.log("request reieved");
    let num=Math.floor(Math.random()*6)+1;
    res.render("home2.ejs",{num});  // here num will get printed in ejs file but we have to recieve this num in  home2.ejs
})