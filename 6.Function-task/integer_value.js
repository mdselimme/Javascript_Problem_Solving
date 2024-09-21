// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(value){
    if(typeof value === "number"){
        if(value%2===0){
            return "Value is Even";
        }
        else{
                return "Value is Odd";
            }
    }
    return "Please input Number";
}

const result = odd_even(50);
const result2 = odd_even(49);
const result3 = odd_even('string');
console.log(result);
console.log(result2);
console.log(result3);