const express=require("express");
const app=express();
const port=8080;
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");  // requiring the chat.js file which is exported 

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs"); 

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

// let chat1=new Chat({
//     from:"neha",
//      to:"priya",
//      msg:"send me your exam sheets",
//      created_at: new Date()  // UTC format time
// });

// chat1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


app.get("/",(req,res)=>{
    res.send("running well");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

