const arrDiv = [33, 50, 79, 78, 90, 101, 30];

const divTen = arrDiv.filter((num) => num % 10 === 0);

const arrFind = arrDiv.find(num=> num%10===0);

console.log(divTen);
console.log(arrFind);