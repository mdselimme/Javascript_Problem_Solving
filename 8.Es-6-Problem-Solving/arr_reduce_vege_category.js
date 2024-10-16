const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
];


const vagetable = items.reduce((accumulator, item)=>{
    const category = item.category;
    if(!accumulator[category]){
        accumulator[category] = [];
    }
    accumulator[category].push(item.name);
    return accumulator;
},{});

console.log(vagetable);