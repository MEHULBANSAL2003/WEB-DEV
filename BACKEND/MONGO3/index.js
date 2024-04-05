const express=require("express");
const app=express();
const port=8080;
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");  // requiring the chat.js file which is exported 

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs"); 
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/",(req,res)=>{
    res.send("running well");
})




// index route to get all the chats
app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();   // chat.find is asynch fucntion so we need to make whole function async
  
    console.log(chats);
    //res.send("working");
    res.render("index.ejs",{chats});
    
})

// rendering form for new chat

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",(req,res)=>{
   
    let {from,to,msg}=req.body;
    // console.log(from);
    // console.log(to);
    // console.log(msg);
    

    // creating new chat
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })

    //console.log(newChat);

    newChat.save()
    .then((res)=>{
        console.log("cha was saved");
    })
    .catch((err)=>{
        console.log(err);
    })

    res.redirect("/chats");
})
















app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

