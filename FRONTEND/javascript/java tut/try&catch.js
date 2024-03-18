console.log("hello");
console.log("hello");
// console.log(a);  ----> this will give error as a is not defined or declared
console.log("hello2");
console.log("hello2");
console.log("hello2");

// now if error occur... the code below that will also not get executed..
// to handle the error... we use try and catch

// try: it tries the piece of code if it is valid or not.. if it is valid then it will be executed
// if statement written in try gives error... then statement written in catch will be executed

try {
     console.log(a);
} catch(error){   // here error s=is the error that will be thrown if we not use try statement
    console.log(error);
    //console.log("variable doesn't exist");
}