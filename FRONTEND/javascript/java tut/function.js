// syntax for makin the funtion 
function hello(){          
    console.log("hello");
}


hello()   //calling the function

// functions with arguement

function printname(name){
    console.log(name);
}

printname("mehul");
printname("aman");

function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printinfo("mehul",20);
printinfo("mehul");  // here age is not passed... but it will not throw error.. it just put age=undefined..

// return keyword

function sum(a,b){
    return a+b;
    
}

let ans=sum(5,6);
console.log(ans);   



// FUNCTIION EXPRESSIONS..!!
// they are nameless functions..!! and syntax to write them is:
let sum1= function(a,b){
    return a+b;
}

let q=sum1(2,3);
console.log(q);

// we use this ucntion coz we can change the values of fucntion just like we change the value of variable..

sum1=function(a,b){
    return a+b+5;
}

q=sum1(2,3);
console.log(q);

// Higher order functions..!! -> if a functiuon is passed as an arguemwnt or if any fucntion returns a function are called higher order fucntuon

let multiplegreet= function(func,n){  // higher order fucntion
    for(let i=0;i<n;i++){
        func();
    }
}

let greet= function(){
    console.log("hello");
}

multiplegreet(greet,5);