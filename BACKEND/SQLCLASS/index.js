const {faker}=require("@faker-js/faker");

const mysql=require("mysql2");  // requiring mysql

// creating a connection to database
 // to create a connection.. we need to create a database first in myysql workbench 
const connnection=mysql.createConnection({
host:"localhost",
user:"root",
database:'delta_app',  // name of the databse
password:"Mehul@123"
});

// using queries

try{

    connnection.query("SHOW TABLES",(err,result)=>{
        if(err) throw err;
        console.log(result);  // this result is actually an array..!!
        console.log(result.length);
        console.log(result[1]);
     }) 

} catch(err){
    console.log(err);
}





//INSERTING NEW DATA INTO TABLE USER..!!
// let q="INSERT INTO  user(id,username,email,password) VALUES (?,?,?,?)" ; // these ? are placeholder that are passed dynamically..
// let user=["123","123_newuser","abc@gmail.com","abc"]; // these are the values to be passed..!! in place of ?

// try{

// connnection.query(q,user,(result,err)=>{  // adding the data through query
// if(err) throw err;
// console.log(result);
// });
// } catch(err){
//     console.log(err);
// }

// INSERTING MULTIPLE DATA IN A GO..!!


let q1="INSERT INTO  user(id,username,email,password) VALUES ?" ; // we can just write single ? to enter all the data
let users=[
    ["123b","123_newuserb","abc@gmail.comb","abcb"],
    ["123c","123_newuserc","abc@gmail.comc","abcc"]  
];
try{

connnection.query(q1,[users],(result,err)=>{  // users is passes in array bcoz users is 2d array and we want each id array to be inserted
if(err) throw err;
console.log(result);
});
} catch(err){
    console.log(err);
}






connnection.end();  // to end the connection..!!















let getRandomUser=()=>{
    return {
   
 userId:faker.datatype.uuid(),
 username:faker.internet.userName(),
 email: faker.internet.email(),
 password:faker.internet.password()


    };
};

console.log(getRandomUser());  // everytume getting new fake data