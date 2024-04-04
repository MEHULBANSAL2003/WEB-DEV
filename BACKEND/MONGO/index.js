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

//inserting many at the same time

User.insertMany([

  {name:"Tony",email:"tony@gmail.com",age:50},
  {name:"Peter",email:"peter@gmail.com",age:30},
  {name:"Bruce",email:"bruce@gmail.com",age:47},
]).then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})


 // find method to search for documents

 User.find({}).then((res)=>{
  console.log(res);
 }).catch((err)=>{
  console.log(err);
 });


// find method with some filter
User.find({age:{$gt:47}}).then((res)=>{
  console.log(res[0].name);
})
.catch((err)=>{
  console.log(err);
})

// special method to find the document by id..!!

User.findById("660eefd77cc8d774c5515752")
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})

// updating the document

User.updateOne({name:"Bruce"}, {age:49}) // this query will search for document with anme bruce and update its age to 49
.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})

// uppdate many...!!
User.updateMany({age:{$gt:48}}, {age:55})
.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})