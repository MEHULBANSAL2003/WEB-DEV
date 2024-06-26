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
    required:true,  // it is same as that of not null in sql
    maxLength:20
   },
   author:{
    type:String
   },
   price:{
    type:Number,
    min:[1,"price is less than 1"]  // this is property of number., that minimum value is 1 and if some try to set price<1// error will be 
                                    //thrown -> price is less than 1 
   },
   discount:{
    type:Number,
    default:0    // this means discount is set to 0 by default
   },

   category:{
    type:String,
    enum:["fiction", "non-fictuion"], // enum is used to store the data if category is only matches the value in enum array
   }



  })

  // creating model..!
const Book= mongoose.model("Book",bookSchema);

// inserting document


// let book1=new Book({
//     title:"Mathematics XII",
//     author:"RD Sharma",
//     price: 1200
// })

// book1.save()   // saving document to collection 
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// // let book2=new Book({  // this is invalid syntax as title is required but u didnt passed anything.. so it will give error book validation falied
   
// //     author:"RD Sharma",
// //     price: 1200
// // })

// let book2=new Book({
//     title:"Gone Girl aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",  // this will fail because maxlength is to be 20
//     price: "399"
// })

// // this syntax is valid as 400 is converted into 400..!!


// book2.save()   // saving document to collection 
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// // this book will get saved as category is matched to enum
// let book3=new Book({
//     title:"Marvel comic",  // this will fail because maxlength is to be 20
//     price: "499",
//     category:"fiction"
// })

// // this syntax is valid as 400 is converted into 400..!!


// book3.save()   // saving document to collection 
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// UPDATING DOCUMENTS IN SCHEMA VALIDATION
// normally the schema defined is valid for new documentsinserted.. the don't interfere in updation..
// to maintain the schema validation in updation we need to pss an arguement

Book.findByIdAndUpdate("660f949ca8c9a7830b3ffb40",{price:-500},{ runValidators:true})  // this will give error beacues we cant set price -ive
.then((res)=>{
    console.log(res);
})
.then((err)=>{
    console.log(err.errors.price.properties.message); //err.errors will give us the specific error we set in schema to be thown on invalid insertion
})

