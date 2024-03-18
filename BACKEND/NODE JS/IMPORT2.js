// importing the data

// here we can choose what we want to import unlike in require we transfer whole file
 
// to use this method.. we need to add type:"module" in package.json
import {sum,PI} from "./IMPORT.js"

console.log(sum(2,3));
console.log(PI);

// import is asynchronous