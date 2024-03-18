// PROCESS-> this object provides information about and control over the current node.js process 

// pocess.argv -> returns an array containing the command line arguements passed whrn node.js process was launched

console.log(process.argv);  // by default it contains 2 values

for(let i=2;i<5;i++){
    console.log("hello "+ process.argv[i]);
}
