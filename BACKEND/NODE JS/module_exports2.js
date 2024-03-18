// hwre i want to use the function of module_exports.js

const somevalue= require("./module_exports");   // it is collecting the data of other file in same directory
console.log(somevalue);

let sum1=somevalue.sum(4,5);
console.log(sum1)