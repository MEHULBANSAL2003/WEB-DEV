const express=require("express");
const app=express();
const port=8080;

// creating our own middleware..!!
// middleware -> they are used to do something between request and response..!!
// middleware can do 2 things... either complete it's work and pass to next functio or send response by itself
// app.use(()=>{
//     console.log("middleware");
//     // here neither response is send nor passed to next... so program will pause here...!!
// })

app.use((req,res)=>{
    console.log("middleware");
    res.send("hi i m middleware");
     // now the response send is hi i m middleware both on root and random page as we havent declared any specific path so it will work for all
})

// middlewares have excess to both req and res parameters...!!



app.get('/',(req,res)=>{
    res.send("hi, i m root");
})

app.get("/random",(req,res)=>{
    res.send("hi, i m random");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})