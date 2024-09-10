// 1.Create different variables, each containing either an array or a non-array value.
let name = "Selim";
let num = 50;
const arr = [1,2,3,4,5,6,4565,5];


// 2.Now use isArray to check if each variable is an array.
const result_1 = Array.isArray(name);
const result_2 = Array.isArray(num);
const result_3 = Array.isArray(arr);

// 3.Print a message to the console indicating whether each variable is an array or not.
console.log("Array : ", result_1);
console.log("Array : ", result_2);
console.log("Array : ", result_3);