console.log("hello")


// function savetodb(data,success,failure){

// let internetspeed=Math.floor(Math.random()*10)+1;
// if(internetspeed>4){
//     success();
// }
// else{
//    failure();
// }
// }

// savetodb("apna college",()=>{
//     console.log("success1: data was saved");
//     savetodb("apna college",()=>{
//         console.log("success2: your data was saved");
//         savetodb("data 3",()=>{
//             console.log("success 3: data was saved");
//         },()=>{
//             console.log("failure3: weak connections!! data was not saved");
//         })
//     },()=>{
//         console.log("failure2: weak connection.. data not  saved");
//     })
// },()=>{
//     console.log("failure 1:weak connection!! data was not saved..!!")
// }); 

// all this code from line 15-29 is callback hell.. to tackle with this we use promises 

// The PROMISE object represents the eventual ceompletion(or failure) of an asynchronous operation and its resulting values..

// int promise : resolve(success callback) and reject( failure callback)





// promise will give 3 states.. 1)fullfilled: success , 2)rejected: failure , 3)pending: not sure

function savetodb(data){

    return new Promise((resolve,reject)=>{
       let internetspeed=Math.floor(Math.random()*10)+1;
       if(internetspeed>4){
           resolve("success: data was saved");
       }
       else{
           reject("failure: weak connection");
       }
       })
   }

//    let req=savetodb("apana college");
//    req
//    .then(()=>{
//     console.log(req);
//     console.log("sucess!! data saved");
//    })
//    .catch(()=>{
//     console.log(req);
//     console.log("failure! data not saved");
    
//    })

   // PROMISE CHAINING..!!

// savetodb("apna college")
// .then(()=>{
//     console.log("data1 saved");
//     savetodb("apna college2")
//     .then(()=>{
//         console.log("data 2 saved");
//     })
// })
// .catch(()=>{
//     console.log("weak connection..")
// })


savetodb("1")
.then(()=>{
    console.log("data1 saved");
    return savetodb("2");
})
.then(()=>{
    console.log("data2 saved");
    return savetodb("3");
})
.then(()=>{
    console.log("data3 saved");
})
.catch(()=>{
    console.log();
    console.log("weak conncection");
})