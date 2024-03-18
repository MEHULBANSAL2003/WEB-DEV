// nopw we want to add task in such a way that.. when user type its task and enter button..
// task will be added and shown to us in unordered list.

let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    //console.log(inp.value);
    let item=document.createElement("li");
    item.innerText=inp.value;
 
    //creating the delete button
    let dltbtn=document.createElement("button");
    dltbtn.innerText="delete task";
   // dltbtn.classList.add("delete");
    item.appendChild( dltbtn);

    
    ul.appendChild(item);
    inp.value="";  // to emepty tthe value after clicking on the button  
});


// now we will add fucntionality ofg deleting thre task

let dlbtns=document.querySelectorAll(".delete");

// for(btn of dlbtns){
//     btn.addEventListener("click",function(){   // this will not delete the element added 
//              let parent=this.parentElement;
//              parent.remove();
//     });
// }
 

// now the elements created inside any elemts's elvent listner and we add another event listner on them.. they will not work 
// because event listner are create only for existing elements.. not for the one which are created by javascript
// to overcome this... we use EVENT DELEGATION

// it is a phenomena of programming in which we use concept of event bubbling
// here what we do is.. if we want to trigger something for child event.. we do the same trigger for its parent element

// like here.. we want to add event listner on buttons but we casnt do that.. as they are newly created elemebnt..
// so what we will do is.. we add event listner to its parenmt.. i.e ul.. and by the concept of event bubbling.. as delete vutton is 
// nested inside ul.. it will also get triggered

ul.addEventListener("click",function(event){
    console.log(event.target);   // event.target gives the elemtn where mouse is clicked
    console.log(event.target.nodeName);   // it gives tge name of element
    console.log("button clicked");  

    if(event.target.nodeName=="BUTTON"){
        let itm=event.target.parentElement;
        itm.remove();
    }
});