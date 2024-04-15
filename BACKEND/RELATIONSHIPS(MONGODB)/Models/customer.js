const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}



const orderSchema=new mongoose.Schema({
    item:String,
    price:Number
});

const customerSchema=new mongoose.Schema({
    name:String, 
    // details of order will be stored as a reference of orders table..!!
    orders:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"  
    },
    ],
});


const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);


const addOrders=async()=>{
    let res=await Order.insertMany([
       {item:"Samosa",price:12},
       {item:"Chips",price:10},
       {item:"Chocoloate",price:40}
    ]);
    console.log(res);
}

addOrders();