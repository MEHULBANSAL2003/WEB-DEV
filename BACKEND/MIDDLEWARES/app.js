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

// app.use((req,res,next)=>{  // next is the arguement that is called when the middleware work is completed
//     console.log("hi i m 1st middleware");
//     //res.send("hi i m middleware");
//      // now the response send is hi i m middleware both on root and random page as we havent declared any specific path so it will work for all
//      next();  // it will call on other middleware
//     })
// app.use((req,res,next)=>{
//     console.log("hi i m 2nd middleware");
//     next();
// })
// // middlewares have excess to both req and res parameters...!!

// creating a urtility middleware for logger

app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();  // manupulating req
    console.log(req.method,req.hostname,req.path,req.time);  // type of req made
    next();
})


// creating middleware for some authentication..!!
app.use("/api",(req,res,next)=>{  // middleware to specific path only
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED..!!")
})

app.get("/api",(req,res)=>{
    res.send("data");
})

app.get('/',(req,res)=>{
    res.send("hi, i m root");
})

app.get("/random",(req,res)=>{
    res.send("hi, i m random");
})


// middleware at last for 404 error
app.use((req,res)=>{
    res.send("page not found!!");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})