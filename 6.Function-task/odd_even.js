// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function evenOdd(number){
    if(number%2===0){
        const div = number/2;
        return "The number is even : " + div;
    }
    else{
        const multiply = number*2;
        return "The number is odd : " + multiply;
    }
};

const result = evenOdd(100);
const result2 = evenOdd(99);
console.log("Result - ", result);
console.log("Result - ", result2);