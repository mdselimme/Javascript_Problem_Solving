const arr = [1, 3, 5, 7, 9];

const arrOfEven =[];

// make this array of even number by for loop
for(let i = 0; i < arr.length; i++){
    arr[i] += 1;
    arrOfEven.push(arr[i]);
};
console.log(arrOfEven);