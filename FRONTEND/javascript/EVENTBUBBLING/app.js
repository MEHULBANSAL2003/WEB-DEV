let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");  // as their are multiple li
// console.log(li);
// console.log(li.classList);

// div.addEventListener("click",function(){
//     console.log("div got clicked");

// })

// ul.addEventListener("click",function(){
//     console.log("ul got clicked");

// })
// for(lis of li){
// lis.addEventListener("click",function(){
//     console.log("li got clicked");

// })
// }

// event bubbling is if we have nested elements and we add event listner to all of the elements, then on clkicking innermost element.. '
//each iof the event listner got triggered;

// to stop this

div.addEventListener("click",function(event){
    event.stopPropagation();   // this is used to prevent event bubbling
    console.log("div got clicked");

})

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul got clicked");

})
for(lis of li){
lis.addEventListener("click",function(event){
    event.stopPropagation(); 
    console.log("li got clicked");

})
}
