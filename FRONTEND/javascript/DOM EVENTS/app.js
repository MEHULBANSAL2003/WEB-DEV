let btn=document.querySelector('button');

console.dir(btn);

// btn.onclick= function(){
//     console.log("i was clicked"); 
// }

function click(){
    console.log("i was clicked");
}
let sayhello=()=>{
    console.log("hello!!!");
}
function mouse(){
    console.log("mouse hovered");
}
// btn.onclick=click;  // here click() is not passed.. as if we pass paranthesis also.. then fucntuion is executed ther.e. but we want to execute
// on clicking only

// for multiple buttons:
let btns= document.querySelectorAll('button');

for(btn of btns){
    btn.onclick=click;
    btn.onmouseenter=mouse;  // here on mouse enter triggers when our cursor just goes in range of element
}


// EVENT LISTNERS..!!

//  the problem with on click fucntion is that is only  take single value at a time.. like if we want to do multiple things with single 
// click then it is not possiblw with onclick fucntion

let btns2= document.querySelectorAll('button');

for(btn of btns2){
    btn.addEventListener("click", click);   
    btn.addEventListener('click',sayhello);
    btn.addEventListener('dblclick',click);  //  dblclick is couble click
  // click and sayhello are calllbacks that will be executed on clicking the button
}

// we can add event listeners on anythibng.. like on paragraphs also

// THIS IN event listner
/*
obj.addeventolistner(event,callback);  --->> simple syntax for adding eeentlistner..
here in callback.. we can use "THIS"  which will refer to obj where obj is the element to which event listener is addedz
*/ 

btn=document.querySelector('button');
btn.addEventListener("click",function(){
console.log(this);   // here this wuill contain the vaklue of btn
console.dir(this);
console.log(this.innerText);
this.style.backgroundColor="red";
});

// this keyword is useful when we want to use single event listner on multiple type of object
// we havwe h1,h3,p and button tag in html.. we want to change the colour of tag that is clicked to blue..
// one of the way is to add different-2 event listener 


