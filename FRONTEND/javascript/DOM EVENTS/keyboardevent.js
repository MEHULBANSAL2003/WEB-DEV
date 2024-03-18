 let btn=document.querySelector("button");
//  btn.addEventListener("click",function(event){   // event is default arguement
//     console.log(event);    // it gives us the information about triggered methods
//     console.log("i got clicked");
//  })

let inp=document.querySelector("input"); 
// now when we type something inside input bar... keyboard method will trigger

inp.addEventListener("keydown",function(event){  // keydown will trigger when key is pressed
    console.log(event);
    console.log(event.key); // it will give the key pressed
    console.log(event.code); // it will give the code of key pressed
    if(event.code=="ArrowUp"){
        console.log("move forward");
    }
    else if(event.code=="ArrowDown"){
        console.log("move backward");
    }
    else if(event.code=="ArrowLeft"){
        console.log("move left");
    }
    else if(event.code=="ArrowRight"){
        console.log("move rightward");
    }
    else{
        console.log("invalid move");
    }
})

// inp.addEventListener("keyup",function(){  // keydown will trigger when key is released after pressing 
//     console.log("key was released");
// })