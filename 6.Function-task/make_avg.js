// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, length){
    let sum=0;
    for(let num of arr){
        sum+=num;
        
    }
    let avg = sum / length;
    return avg;
}

const arrMain = [10,20,30,40,50,60,70,80];

const result = make_avg(arrMain, arrMain.length);

console.log("Avr Mark : ", result);