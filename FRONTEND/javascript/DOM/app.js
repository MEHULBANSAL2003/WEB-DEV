// seleting element by id
// document.getelementbyidd("id_name");
let a=document.getElementById("mainImg");
console.log(a);
// a.src="assets/creation_3.jpg";    // changing the image source
//selecting elements by class name

let b=document.getElementsByClassName("oldImg");

console.log(b);  // it will give all eleemts with class name "oldImg"
console.log(b[0]);  // it will give only the 1st occurenct

for(let i=0;i<b.length;i++){
    console.log(b[i]);
}

// selecting elements by tag namer

let c=document.getElementsByTagName("b");
console.log(c); 

// another syntax is by using QUERY SELECTOR..!!

document.querySelector("p"); // selects the first p tag
document.querySelector("#description");  // selects the first element with id=description
document.querySelector(".mainImg");  // select the first element with class name= mainImg;


document.querySelectorAll("p"); // selects ALL p tags

console.log(document.querySelector("div a")); // selects the element with a tag inside div tag

let para=document.querySelector("p");
console.log(para);
console.log(para.innerHTML);  // shows the full markup
console.log(para.innerText); // shows the visible text on screen inside p tag
console.log(para.textContent);  // showes all fyull conrtent.. like something hidden property is used which is nopt visible on screen

para.innerText="hi,i m peter parker  " // changinf the inner text of para

// MANIPULATING ATTRIBUTES

let img=document.querySelector("#mainImg");
console.log(img);
// to get the attribute of this image tag
img.getAttribute("id");

// setting the other value
// img.setAttribute("id", "spidermanimage");  // by this.. id is changed from mainImg to spidermanimage

// we can also set new attribute to tag even if initially it is not preswent


// MANIPULATING STYLES
img=document.querySelector("img");
console.dir(img);
console.dir(img.style);


let heading= document.querySelector("h1");
heading.style.color='purple';   // setting theen style property of heading to purple
heading.style.backgroundColor="red";  // in js, background colour is written in camelcase

// now we want to change the coloyur of anchor tag inside list

let atag=document.querySelectorAll("div a ");
// for(let i=0;i<atag.length;i++){
//        atag[i].style.color='green';
// }
for(link of atag){
    link.style.color='purple'; 
} 

// style give us inline prioperties


//CLASS LIST PROPERTIES..!!

img=document.querySelector("img");
console.log(img.classList);  // it will give all the class declared in img

// to add classes..
img.classList.add("abc");
console.log(img.classList);

// to remove class
img.classList.remove('abc');
console.log(img.classList);

// to check if particular class is present or not
console.log(img.classList.contains("abc"));  // it will give true or false;

// to toggle between add or remove

img.classList.toggle("abc");
console.log(img.classList);

img.classList.toggle("abc");
console.log(img.classList);



// NAVIGATION IN JS
//with the help of navigation... we can go from one element to another element

let h4=document.querySelector('h4');

console.log(h4.parentElement);  // it will give the parent of h4;

let div=document.querySelector('div');
console.log(div.children);  // it will give all children of div tagz
console.log(div.childElementCount);  // it will give count of no of children

// we can also navigate to siblings 

let ul=document.querySelector('ul');
console.log(ul.children);

console.log(ul.children[1].previousSibling);
console.log(ul.children[1].nextSibling);

//changing the colour of h1 tag using sibling 

img=document.querySelector('img');
let h=img.previousElementSibling;
h.style.color="blue";

// ADDING ELEMENTS..!!
// like if we wan tto add new paragraph opr heading or anything else using js.

let newpara=document.createElement('p');  // creating the p tag..  
// but right now it will not be shown anywhere in html filwe...to do so,... we need to tell the position where we want to insert that
newpara.innerText="adding element with js."

// let add this as a chikld of body
let body=document.querySelector("body");
body.appendChild(newpara); // append fucntyion will append element at last 

let box= document.querySelector(".box");
let btn=document.createElement('button');

btn.innerText='click me';
box.appendChild(btn);

newpara.append(" and learning mew things")  // it will append thje text to existing element

// prepend is used to add ther element at starting


// insert adjacent element

let btn2=document.createElement('button');
btn2.innerText="new button..!!";

let p=document.querySelector('p');

p.insertAdjacentElement('beforebegin',btn2);  // btn 2 is added just before para is startted
//p.insertAdjacentElement('afterbegin',btn2);  it means after begining the p tag

//similar.. beforeend and aftwerend  

//similarly remove fuction works..!!
      

