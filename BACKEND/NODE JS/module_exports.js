// // require() -> a built-in function to include external modules that exist in separate files..

// const sum=(a,b)=>{
//     return a+b;
// }

// const mult=(a,b)=>{
//     return  a*b;
// }

// const g=9.8;

// const PI=3.14;


// module.exports=123;  // it means it is exporting some file or data to another files..!! whereever we recieve it

// // now i want to export all the ficntion values to other file

// let obj={
//     sum: sum,
//     mult:mult,
//     g:g,
//     PI:PI
// };

// module.exports=obj;

// // other syntax is:
// module.exports={
//     sum: sum,
//     mult:mult,
//     g:g,
//     PI:PI   
// }

// oTHER SYNTAX IS:



module.exports.sum=(a,b)=>{
    return a+b;
}

module.exports.mult=(a,b)=>{
    return  a*b;
}

module.exports.g=9.8;

module.exports.PI=3.14;



