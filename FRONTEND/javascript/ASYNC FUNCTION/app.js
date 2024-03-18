// async fucntion by default return promises.. 
async function greet(){
// if anything irrelevant is written inside this.. then it retun error(rejected state)
let a=5;
if(a>10){
throw "some random error";  // it will give this error if error occurs

}
    return "hello";    // hello is the result of promise
}



greet()
.then((result)=>{
    console.log(result);
    console.log("promise was successful");
})
.catch((err)=>{
    console.log(err);
    console.log("error occured");
})


// we can make our arrow fucntions as async

let demo= async ()=>{
    return 5;
}

 
