// creating user database..!!
const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema=new Schema({
    username:String,
    // here mongo itself create id for user1 and also for all the address as it takes all the address object as new schema
        // to stop this , we will explicitly pass _id =false
    addresses:[
        {   
            _id:false,
            location:String,
            city:String,
        }
    ]
});

const User=mongoose.model("User",userSchema);

const addUser=async()=>{
    let user1=new User({
        username:"sherlockholmes",
        
        addresses:[{
            location:"221B Baker Street",
            city:"London"
        }]
    });
    // anther way of adding address
    user1.addresses.push({

        location:"P32 WallStreet",
        city:"London"
    });

    let result=await user1.save();
    console.log(result);
}

addUser();
