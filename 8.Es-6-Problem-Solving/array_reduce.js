const people = [
    {name: "Meena", age:20},
    {name: "Kalam", age:15},
    {name: "Suchorita", age:22},
];

const arr = people.reduce((accumulator, value) => {return accumulator += value.age},0);

console.log(arr);