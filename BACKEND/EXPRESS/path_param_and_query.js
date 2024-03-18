const express=require("express");
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);

});

// no on instagram.. there are million of users.. so we search for some particular person id.. we need to create get request for that
// but it is not possible to write individually get get requeest for each user..!!

// top overcome that we use path parameters..!!

// thwere is method called parram.. that return the parameters passed at time of creating a request byut req.params..!!

app.get("/:username/:id",(req,res)=>{
   let {username,id}=req.params;
    console.log(req.params);    // params will store the routes
    res.send(`welcome to page of @${username}`);
});


// QUERY STRINGS -> data passed after ? in url
// www.npmjs.com/search?q=figlet 

app.get("/search",(req,res)=>{
    console.log(req.query);  // it will give akll the quey
    let {query}=req.query;
    if(!query){
        res.send("no query selected");
    }
    res.send(`welcome to query ${query}`);
})

