

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let num = 81;
let sum = 0;
while(num<=131){
    if(num%2!==0){
        let num1 = sum;
        sum += num;
        console.log(num1 + " + " + num + " = " + sum);
    }
    num++;
}


/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let num2 = 206;
let sum2 = 0;
while(num2<=311){
    if(num2%2==0){
        let num1 = sum2;
        sum2 += num2;
        console.log(num1 + " + " + num2 + " = " + sum2);
    }
    num2++;
}


