const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');  // amazon is the name of database

  }
  // other syntax of creating schema...with more constraints on each key..!!

  // in mongo.. if type is number.. it means that even if we provide it string... tht is convertible in string =
  // example: "abc" is not convertible to string but "123" is convertible to 123
  const bookSchema=new mongoose.Schema({

   title:{
    type:String,
    required:true  // it is same as that of not null in sql
   },
   author:{
    type:String
   },
   price:{
    type:Number
   }



  })

  // creating model..!
const Book= mongoose.model("Book",bookSchema);

// inserting document


let book1=new Book({
    title:"Mathematics XII",
    author:"RD Sharma",
    price: 1200
})

book1.save()   // saving document to collection 
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// let book2=new Book({  // this is invalid syntax as title is required but u didnt passed anything.. so it will give error book validation falied
   
//     author:"RD Sharma",
//     price: 1200
// })

let book2=new Book({
    title:"Mathematics XII",
    author:"RD Sharma",
    price: "400"
})

// this syntax is valid as 400 is converted into 400..!!


book2.save()   // saving document to collection 
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})