const people = [
    {name: "Meena", age:20},
    {name: "Kalam", age:15},
    {name: "Suchorita", age:22},
];

const findArr = people.find((even)=> even.age > 20);

console.log(findArr);