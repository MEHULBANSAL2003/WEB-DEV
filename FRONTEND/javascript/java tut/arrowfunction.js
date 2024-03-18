const sum=(a,b)=> {
    console.log(a+b);
};
console.log(sum)
sum(2,3);

// implicit return

const mul=(a,b)=>(   
    a*b   // implicity returning the product
);

console.log(mul(2,4));
