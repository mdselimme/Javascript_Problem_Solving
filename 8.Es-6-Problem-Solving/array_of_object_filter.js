
const instructor = [
    {name:"Sifat", age:28, position:"Senior"},
    {name:"Kawser", age:32, position:"Junior"},
    {name:"Shah Alam", age:59, position:"Senior"}
];

const senior = instructor.filter((int)=> int.position.toLowerCase() === "senior");

senior.map((even)=>console.log(even.name));