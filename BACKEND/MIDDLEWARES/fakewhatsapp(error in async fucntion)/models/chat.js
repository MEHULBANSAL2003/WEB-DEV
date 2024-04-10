// we create different models in different file and require them in main file

const mongoose=require("mongoose");

// creating schema
const chatSchema=new mongoose.Schema({

from:{
    type:String,
    required:true
},
to:{
    type:String,
    required:true
},
msg:{
    type: String,
    maxLength:50
},
created_at:{
  type:Date,
  required:true
}

})


// creating model

const Chat=mongoose.model("Chat",chatSchema);

// exporting the module
 module.exports=Chat;
