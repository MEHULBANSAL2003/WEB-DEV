let btn=document.querySelector("button");
let h3=document.querySelector('h3');
let h1=document.querySelector('h1');
let p=document.querySelector('p');

function changecolor(){
    console.log("i got clicked ");
    console.log(this);
    this.style.backgroundColor="blue";
}

btn.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);


