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