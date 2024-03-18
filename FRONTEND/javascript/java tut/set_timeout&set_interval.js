console.log("hii");

setTimeout(()=>{
    console.log("java script");
},4000);    // 4000 is time after which we want to execute the statement written inside..and this time is in millisecond 

console.log("welcome")  // this will be executed before set timeout


// SET INTERVAL..
// it is same as that of settimeout but it execute itself agian and again after the time provided

console.log("hii");

let id=setInterval(()=>{
    console.log("java script");
},4000);    

console.log("welcome")

// to stop the setinterval..
// we can use clearinterval
clearInterval(id);