let form=document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault(); // it will stop the default behaviour.. i.e goint to action page on submiting the page..i.e we will remain on same page
//     alert("form submitted");
// })

// accesing data from forms..!!


// form.addEventListener("submit",function(event){
//     event.preventDefault();
//    let inp=document.querySelector("input");
//     console.log(inp);  
//     console.dir(inp);
//    let user=document.querySelector("#user");
//    let pass=document.querySelector("#pass");
//    // console.log(inp.innerText);  // it will not give us the text written inside the input
//     // to get that
//     console.log(user.value);  // we have to write inp.value
//     console.log(pass.value);
// })


// now we can access everything under form directly without providing id to each and every input

form.addEventListener("submit",function(event){
    event.preventDefault();
   console.log(this.elements);  // this will give us array of every element inside form
   
   console.log(form.elements[2]);
   let user=form.elements[0];
   let pass=this.elements[1];

   alert(`hi ${user.value}, your password is ${pass.value}`);


})