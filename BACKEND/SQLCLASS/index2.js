const express= require("express");
const {faker}=require("@faker-js/faker");
const path=require("path"); 
const mysql=require("mysql2");  // requiring mysql

const app=express();

const port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

// app.get("/",(req,res)=>{
//     res.send("welcome");
// })

const connnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:'delta_app',  // name of the databse
    password:"Mehul@123"
    });


// now we want to link backend with sql
// getting the count of number of users on hame page
app.get("/",(req,res)=>{
let q= "SELECT COUNT(*) FROM user";

try{
connnection.query(q,(err,result)=>{
 if(err) throw err;

 console.log(result[0]);
 let count=result[0]["COUNT(*)"];
 res.render("home.ejs",{count});


})
}catch(err){
    console.log(err);
}


});

