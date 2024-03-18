let btn=document.querySelector('button');

btn.addEventListener("click",function(){
    let randomcolour=changecolor();
 let h3=document.querySelector('h3');
   console.log(h3);
 h3.innerText=randomcolour;

 let div=document.querySelector("div");

 div.style.backgroundColor=randomcolour;


});


// to get random color we need 3 values between 0-255
function changecolor(){
let r=Math.floor(Math.random()*255);

let g=Math.floor(Math.random()*255);

let b=Math.floor(Math.random()*255);

let color=`rgb(${r}, ${g},${b})`;

return color;
}