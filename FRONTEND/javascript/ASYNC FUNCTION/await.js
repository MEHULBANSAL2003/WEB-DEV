// await pauses the execution of its surrounding async function until the promise is resolved or rejected

// await keyword cn be used only in async functions.!!

// function getnum(){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let a=Math.floor(Math.random()*10);
//         console.log(a);
//         resolve();
//     },1000);


// })
// }

// async function demo(){
//     await getnum();   
//     await getnum();
//     await getnum();
// }

let h1=document.querySelector("h1");
console.log(h1);
// function colorchange(color){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            h1.style.color=color;
//             resolve();
//         },1000);
//     })
// }

// async function demo(){
//     await colorchange("red");
//     await colorchange("yellow");
//     await colorchange("blue");
// }


// HANDLING REJECTIONSS..!!

function colorchange(color){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let a=Math.floor(Math.random()*10);
                if(a<3){
                    reject("promise rejected");
                }
               h1.style.color=color;
                resolve();
            },1000);
        })
    }
    
    async function demo(){

        try{
        await colorchange("red");
        await colorchange("yellow");
        await colorchange("blue");
        }
        catch(err){
            console.log(err);
        }
    // if we not write try.. then i case of any error occured.. all this code will also be not executed.!! to exceute this
    // code even on error occured in await. we put them all in try catch statement
        let num=5;
        console.log(5);
    }
    