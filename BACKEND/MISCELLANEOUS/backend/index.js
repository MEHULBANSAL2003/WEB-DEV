const express=require("express");
const app=express();

let port=8080;


// in post request.. data is not visible in url but it transferred in req.body to access it we need to create a middleware as shown belowe

app.use(express.urlencoded({extended:true}));  // if data is urlencoded
app.use(express.json());  // if data is in json format

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
// sending response to get request made from form
app.get("/register",(req,res)=>{
    let {user, password}=req.query;
    
    res.send(`standard get response,  welcome !! ${user} with passcode ${password}`)
})

// sending response to post request made from form 

app.post("/register",(req,res)=>{
   console.log(req.body);  // if we dont middleware above. data will not be printed.. middleware is used to parse the data so as to
                           // help express understand it

let {user, password}=req.body;
  res.send(`standard post response,  welcome !! ${user} with passcode ${password}`)
})
