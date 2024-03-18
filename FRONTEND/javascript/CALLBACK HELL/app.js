console.log("whello");

// JS is asingle threaded language..!!
// all the work is doing synchronously
// but the fucntion like set timeout, set interval and all.. forces to have asynch behaviour

// and this gives arise to callback hell

 let h1=document.querySelector("h1");
// // we want to chnagwe the colour after 1 sec.
// setTimeout(() => {
//     h1.style.color="red";
// }, 1000);

// // now i want to changwe colour again to orange after 1 sec
// setTimeout(() => {
//     h1.style.color="orange";
// }, 2000);     // 2000 is total time after which the colour to changed to orange..  

// // now i want to changwe colour again to green after 1 sec
// setTimeout(() => {
//     h1.style.color="green";
// }, 3000);     // 3000 is total time after which the colour to changed to orange..  

// // but this not good to write separately each of them
// we will make functuion//

// function changecolor(color,time){
//     setTimeout(() => {
//         h1.style.color=color;  
//     }, time);
    
// }

// setTimeout(changecolor("red"),1000);


// setTimeout(changecolor("orange"),2000);


// setTimeout(changecolor("green"),3000);
//changecolor("red",1000);


//but this is not good way of doing things.. we want we do the first task first and second task only after the completion 

// to show that dependencies.. we use callbacks

function changecolor(color,time, nextcolorchange){
    setTimeout(() => {
        h1.style.color=color; 
        if(nextcolorchange){ 
        nextcolorchange();
        }
    }, time);


    // setTimeout(function(){
    //     h1.style.color=color; 
    //     if(nextcolorchange){ 
    //     nextcolorchange();
    // }}, time);

}
// cllabck nesting... callback hell         
changecolor("red",1000,()=>{
    changecolor("orange",1000,()=>{
        changecolor("green",1000,()=>{
            changecolor("yellow",1000)
        });

    });
})
 