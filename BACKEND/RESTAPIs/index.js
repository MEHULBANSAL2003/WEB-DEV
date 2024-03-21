const express= require("express")
const app=express();
const path=require("path")
let port=8080;


app.use(express.urlencoded({extended:true}));


app.set("view engine","views");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})



// for now we dont have data stored in our data base.. 
// to replicare that... we will create our array and store there for now

let posts=[

{
    username:"apnacollege",
    content: "i love coding!!"
}, 

{
    username:"mehulbansal",
    content: "hardwork is important to achieve success"
},
{
    username:"mehul",
    content: "hardwork always win over talent"
},
{
    username:"rahul",
    content: "i got selectd for 1st internship"
}



];



app.get("/posts",(req,res)=>{          // making get requests for all the  posts and we call it INDEX ROUTE
    console.log("server running well");
  //  res.send("server running well");
  res.render("index.ejs",{posts}); 
})


