const items = [1, 2, 3, 1, 2, 3, 7, 8, 7, 10, 15, 15, 10];


const noDuplicateItem = items.reduce((accumulator, value)=>{
        if(!accumulator.includes(value)){
            accumulator.push(value)
        }
        return accumulator;
},[]);

console.log(noDuplicateItem);