const express=require("express");
// now this express is a function that we are executing 
const app=express(); // the value is returned is stored in variable app

// console.dir(app);


//const port=3000;
// PORTS: they are logical endpoints of a network connection that is used to exchange information between a web server and web client
// in simple words.. like we connect charger and mobile through physical port to connect them and charge the mobile
// similarly these ports establish a connection with request and response.. where exchanges takes place

let port= 8080;    // other port is 3000..and many more


 app.listen(port,()=>{   // listen makes a web server that listens to the incoming api requests
    console.log(`app listening on port ${port}`);
 })


 app.use((req,res)=>{
    console.log("request recieved");
 })