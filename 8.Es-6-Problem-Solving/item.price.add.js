
const vegetables = [
    {name:"Carrot", price:120},
    {name:"Cucumber", price:200},
    {name:"Lattos", price:400},
    {name:"Potato", price:600},
    {name:"Onion", price:102}
];

const totalPrice = vegetables.reduce((accumulator, item)=>{
    return accumulator += item.price;
},0);

console.log(totalPrice);