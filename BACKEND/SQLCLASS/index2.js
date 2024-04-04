const express= require("express");
const {faker}=require("@faker-js/faker");
const path=require("path"); 
const mysql=require("mysql2");  // requiring mysql
const methodOverride=require("method-override");
// const { Connection } = require("mysql2/typings/mysql/lib/Connection");


const app=express();


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
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

// getting all the data on user page

app.get("/user",(req,res)=>{
    let q="SELECT * FROM user";

    try{
        connnection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result;
            console.log(data[0]);
            console.log(result[1]);
            
            res.render("user.ejs",{data});
        })
    }catch(err){
        console.log(err);
    }
})


// get request to serve form to edit the username
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
        // now we will search user based on id..!!
        let q=`SELECT * FROM user where id='${id}'`;  


        try{
            connnection.query(q,(err,result)=>{
                if(err) throw err;
                 console.log(result); // result will be in form of array
                 let user=result[0];  // to extract the data of user
                
                res.render("edit.ejs",{user});
            })
        }catch(err){
            console.log(err);
        }

})
// patch request to update the data if password entered is correct
app.patch("/user/:id",(req,res)=>{

    let {password:formPass, username:newUserName}=req.body;
    let {id}=req.params;
    // console.log(id);
    // console.log(pass);

    let q=`SELECT * FROM user WHERE id="${id}"`;

    try{ 
    connnection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];

      if(formPass!=user.password){
        res.send("WRONG PASSWORD..!!");
      }
      else{
        let q2=`UPDATE user SET username="${newUserName}" WHERE id="${id}"`;
       connnection.query(q2,(err,result)=>{
        if(err) throw err;
       // res.send(result);
       });
      }

     })

}catch(err){
    console.log(err);
}
res.redirect("/user");
});


// to post a new data

app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/user",(req,res)=>{
    let {username,email,password}=req.body;
   let id=faker.datatype.uuid();
   //console.log(id);

   //console.log(req.body);
   
   let q2="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)"
   let data=[id,username,email,password];
   console.log(data);

   try{

    connnection.query(q2,data,(err,result)=>{  // users is passes in array bcoz users is 2d array and we want each id array to be inserted
    if(err) throw err;
    console.log(result);
    });
    } catch(err){
        console.log(err);
    }
    


    res.redirect("/user");
});


