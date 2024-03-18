// object literals are key, value paired data structure

const student={
    name:"mehul",
    age:20,
    marks: 94
};

console.log(student);
console.log(typeof(student));

console.log(student.name);  // accessing the particular property of object srtudent;

//nested literals

const classinfo={
aman:{
    grade:"A+",
    city: "Delhi"
},
shardha:{
    grade:"A+",
    city:"Pune"
},
karan:{
    grade:"A+",
    city:"Mumbai"
}

};

console.log(classinfo);
console.log(classinfo.shardha);
console.log(classinfo.shardha.city);
classinfo.shardha.city="Gurgaon";  // changing the city of shardha
console.log(classinfo.shardha.city);
classinfo.shardha;


// arrays of object

const Classobj=[

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

console.log(Classobj);
console.log(Classobj[1].name);
Classobj[1].name="Aman";  // updating the values