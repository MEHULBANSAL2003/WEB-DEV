const mongoose= require("mongoose");

//mongoose.connect("mongodb://127.0.0.1:27017/test");  // this url is link of database with which we connected ad test is the name of databse
// this command awaits for a promise from a database.. making it asynchronous 

// new syntax with aawait keyword to write the same fucntion

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

// creating a schema for collection..!!

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

// now we will create collection  // they are created by models

//MODEL-> model in mongoose is a class with which we construct documents

const User=mongoose.model("User",userSchema);   // on running file... users named collection will be formed in mongodb

const Employee=mongoose.model("Employee",userSchema);  // employees name collection will firm

// making documents

const user1=new User({name:"Adam",email:"adam@yahoo.in",age:48});  // user1 document is created but not saved to db yet

const user2=new User({name:"Eve",email:"eve.google.com",age:48});


user1.save()  // to save the record into db..!!  this method returns promise

user2.save()
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});