const {faker}=require("@faker-js/faker");

let getRandomUser=()=>{
    return {
   
 userId:faker.datatype.uuid(),
 username:faker.internet.userName(),
 email: faker.internet.email(),
 password:faker.internet.password()


    };
};

console.log(getRandomUser());  // everytume getting new fake data