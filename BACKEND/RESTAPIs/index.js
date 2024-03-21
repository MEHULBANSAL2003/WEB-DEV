const express= require("express")
const app=express();
const path=require("path")
let port=8080;


app.use(express.urlencoded({extended:true}));


app.set("view engine","views");
app.set("views",path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname,"public")));


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

app.get("/",(req,res)=>{
    console.log("server running well");
    res.send("server running well");
})

