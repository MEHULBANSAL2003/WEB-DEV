let gameSeq=[];  //  to keep the track of past flashed button in order
let userSeq=[];   // to keep the track of what user pressed
let score=0;
let btns=["red","yellow","green","purple"];  // saving all the buttons 

let started=false;  // tells us whether the game is started;
let level=0;  // tracking the level 

let h2=document.querySelector("h2");


// now step one is to press any key to start the game...!!
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

// now the second step is on starting the game.. the random colour will flash and level will be incremented by 1

function gamebtnflash(btn){
   
    btn.classList.add("flash");  // adding flash claslist for button on pressing

    setTimeout(function(){
       btn.classList.remove("flash");    // removing that flash class after 1000 ms i.e 1sec.
    },100);    
}



function userbtnflash(btn){
   
    btn.classList.add("userflash");  // adding userflash claslist for button on pressing

    setTimeout(function(){
       btn.classList.remove("userflash");    // removing that userflash class after 1000 ms i.e 1sec.
    },100);    
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;  //updating the level


   // choosing the random button 
    let random_index=Math.floor(Math.random()*3);  // generating the random index...
 
    let random_color= btns[random_index];
    let random_btn= document.querySelector(`.${random_color}`);

    gameSeq.push(random_color);
    gamebtnflash(random_btn);
    

}

// now after this.. game will wait for the user to press the same colour which was flashed by the system

function btnpress(){
    console.log("button was pressed");
    console.log(this);  // to find which button was pressed;  
 let btn=this;

 userbtnflash(btn);


 let userbtncolor=btn.getAttribute("id");


 console.log(userbtncolor);
userSeq.push(userbtncolor);

 checksequence(userSeq.length-1);

 

}
// adding event listner on all buttons
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}



function checksequence(idx){
  // level is always equal to sie of game sequence

if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);  
    }
}
else{
    score=level;
    started=false;   // to start the game again
    level=0;
    gameSeq=[];
    userSeq=[];

    h2.innerHTML=`Game Over! Your score is <b>${score}</b>.<br /> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);

}
}