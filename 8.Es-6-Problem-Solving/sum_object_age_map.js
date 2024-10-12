

const people = [
    {name: "Meena", age:20},
    {name: "Kalam", age:15},
    {name: "Suchorita", age:22},
];

let sum = 0;

const sumOfage = people.map((num)=> sum += num.age);

console.log(sum);