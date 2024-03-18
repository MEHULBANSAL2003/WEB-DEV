console.log("hello"); 
let url="https://catfact.ninja/fact";
fetch(url)    // this fucntion returns promise to us 
// .then((res)=>{
// console.log((res));
// res.json() // it also returns us a promise 
// .then((data)=>{
//     console.log(data);
// })

// })
// .catch((err)=>{
//     console.log("error-",err);
// })

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data); 
})
.catch((err)=>{
    console.log("ERROR-",err);
})