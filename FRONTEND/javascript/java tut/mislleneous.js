// ARRAY METHODS:
// FOR EACH:  used in call back..!!

let arr=[1,2,3,4,5];

// let print=function(el){
//     console.log(el);
// }

// arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
})

arr.forEach(element => {
    console.log(element);
});



let Classobj=[

    {
      name:"mehul",
      grade:"A+",
      city: "Delhi"
    },
    {
    name:"aman",
    grade:"A+",
    city: "Gurgaon"
    },
    {
    name:"shardha",
    grade:"A+",
    city: "Pune"
    }
    ];

    // now if we want to print only marks of each student

    Classobj.forEach((el)=>{
        console.log(`${el.name}'s city is ${el.city}`);
    });


    // MAP FUNCTION..!!

    // map fucntion works same as that of for each function.. but the only differene is it stores result of each element into another aray 
    // of same size..!!

    let num=[1,2,3,4,5];

    // let new_num=num.map(function(el){
    //     return el*2;
    // })

    let new_num= num.map((el)=>{
        return el*2;
    })

    console.log(new_num);

    // filter fucntion:

    // it also returns array but if callback provides true only..!!
     let a=[2,4,1,5,6,2,7,8,9];

     let even= a.filter((el)=>{
       return el%2==0;
     });

     console.log(even);

     // every function..
     // same syntax but returns true if and only if answer for all the elements individually is truue otherwise false;
     // it is similar to logical AND operator 
    
     // SPREAD:     expands an iterable into multiple values

    let b=[1,2,3,4,3,2,3,4,3,2,4,3,2,1,1,1,3,0,884,3];
    // now i want to caluculate the minimum of the array... one way is to iterate on array and find the minimum value..
    // and other way is using spread... it passes all the values of array automatically to math.min  and calculate min..

   let mini= Math.min(...b);   // syntax for finding minimum of array with spread function  
   console.log(mini);

   // spread in object literals

   const data={
    email: "mehulbansal83606@gmail.com",
    password:"mehul"
   };


   const data_copy= {...data , id:5};  // id+5 is adding new key, value pair to data copy

   console.log(data_copy);

   let c=[1,2,3,4,5];
   let obj={...c};  // here array is converted in to object.. so key is index of araya nd value is value of array
   console.log(obj);  


   // REST 
// -> it takes indefinite no of arguement and bundle them in an array.. it is just opposite to spread fxn
function sum(...args){
    for(let i=0;i<args.length;i++){
              console.log(args[i]);
    }
}

sum(1);
sum(2,3);