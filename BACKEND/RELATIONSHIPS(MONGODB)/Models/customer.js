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

const addCustomer=async()=>{
    let cust1=new Customer({
         name:"Rahul Kumar"
    });
    // now i will stor the orders for cust1.. first i have to extract the orders for order table..
    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({item:"Chocolate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);
  /// though we pushed order1 and order2 totally.. but in mongodb only there ID is pushed as in schema we defined type to be oBJECTID
    let result=await cust1.save();
    console.log(result);
}
//addCustomer();

const findCustomer=async()=>{
  let result=await Customer.find({}).populate("orders");
  console.log(result[0]);
}

//console.log(res);
// const addOrders=async()=>{
//     let res=await Order.insertMany([
//        {item:"Samosa",price:12},
//        {item:"Chips",price:10},
//        {item:"Chocolate",price:40}
//     ]);
//     console.log(res);
// }

// addOrders();
