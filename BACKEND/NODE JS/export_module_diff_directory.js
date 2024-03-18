// now we want to get data from different directory

// to do so... we will create a file name index.js in the directory from where data is exported..!! and collect all the data into
// that index.js file and export that only instead of exporting each file individually

const info=require("./fruits");  // it will go itno fruits directory and try to find index.js file and collects all the dta the file is exporting

console.log(info);
console.log(info[1].color)
