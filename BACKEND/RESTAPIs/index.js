const express= require("express")
const app=express();
const path=require("path")

const methodOverride=require("method-override");

const {v4:uuidv4}=require("uuid");  //v4 is version 4 
//uuidv4(); //-> '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
// this will gie us unique id's 
let port=8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));


app.set("view engine","views");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})



// for now we dont have data stored in our data base.. 
// to replicare that... we will create our array and store there for now

let posts=[

{   id:uuidv4(),
    username:"apnacollege",
    content: "i love coding!!"
}, 

{   id:uuidv4(),
    username:"mehulbansal",
    content: "hardwork is important to achieve success"
},
{   id:uuidv4(),
    username:"mehul",
    content: "hardwork always win over talent"
},
{   id:uuidv4(),
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
  let id=uuidv4();  // creating new id for new post 
  let {username,content}=req.body;
   posts.push({ id,username,content});
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
        //res.send("request working")
})


// using patch request to update data

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content; // after updating the content..!!
    console.log(id);
    console.log(newContent);

    let post=posts.find((p)=> id==p.id);  // finding the post with the same id
    post.content=newContent;  // updating the content

  res.redirect("/posts"); 
})

// get request for editing the post
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id==p.id); 
    res.render("edit.ejs",{post});
})


 // handling delete request
app.delete("/posts/:id",(req,res)=>{
let {id}=req.params;

posts=posts.filter((p)=> id!==p.id);  // saving posts to same aray where id != id that is to be deleted
  res.redirect("/posts");
})