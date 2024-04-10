// Initializing database..

const mongoose=require("mongoose");
const Chat=require("./models/chat.js");  // requiring the chat.js file which is exported 



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


// creating muliple chats

let allChats=[
    {
        from:"neha",
         to:"preeti",
         msg:"send me noted for exam",
         created_at: new Date()  // UTC format time
    },
    {
        from:"neha",
         to:"priya",
         msg:"send me your exam sheets",
         created_at: new Date()  // UTC format time
    },
    {
        from:"rohit",
         to:"mohit",
         msg:"teach me js callbacks",
         created_at: new Date()  // UTC format time
    },
    {
        from:"amit",
         to:"sumit",
         msg:"all the best",
         created_at: new Date()  // UTC format time
    },
    {
        from:"anita",
         to:"ramesh",
         msg:"bring me some fruits",
         created_at: new Date()  // UTC format time
    },
    {
        from:"tony",
         to:"peter",
         msg:"love you 3000",
         created_at: new Date()  // UTC format time
    }
    
];

Chat.insertMany(allChats);
