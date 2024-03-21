const express= require("express")
const app=express();
const path=require("path")
let port=8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set("view engine","views");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})



// for now we dont have data stored in our data base.. 
// to replicare that... we will create our array and store there for now

let posts=[

{   id:"1a",
    username:"apnacollege",
    content: "i love coding!!"
}, 

{   id:"2b",
    username:"mehulbansal",
    content: "hardwork is important to achieve success"
},
{   id:"3c",
    username:"mehul",
    content: "hardwork always win over talent"
},
{   id:"4d",
    username:"rahul",
    content: "i got selectd for 1st internship"
}



];





// for pot request... we need 2 routes...
// first 1 is get request at : /posts/new  -->this will return us the html form giving us the information about the new post
// 2nd 1 ispost request to post the data into array  
app.get("/posts/new",(req,res)=>{   
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{ 
  console.log(req.body);
  console.log(req.body.content);
  let {username,content}=req.body;
   posts.push({username,content});
  // res.send("post added succesfully");
   res.redirect("/posts");  // redirecting to the page where all posts are posted 
})


app.get("/posts",(req,res)=>{          // making get requests for all the  posts and we call it INDEX ROUTE
    console.log("server running well");
  
  //  res.send("server running well");
  res.render("index.ejs",{posts}); 
})

// retrieving the post with specific id

app.get("/posts/:id",(req,res)=>{
        let {id}=req.params;
        console.log(id);
        let post=posts.find((p)=> id==p.id);
        console.log(post);
         res.render("show.ejs",{post});
        res.send("request working")
})

// now this is working fine but the problem is when we post a new commwnt,.. we cannt assign id to it.. 
// to solve this we use uuid..!!