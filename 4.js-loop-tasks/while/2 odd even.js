/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let od1 = 61;
let sum1 = 0;

while(od1<=100){
    if(od1%2!==0){
        let num1 = sum1;
        sum1 = sum1+od1;
        console.log(num1 , " + ",  od1 , " = ", sum1);
    }
    od++;
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let od = 78;
let sum = 0;

while(od<=98){
    if(od%2==0){
        let num = sum;
        sum = sum+od;
        console.log(num , " + ",  od , " = ", sum);
    }
    od++;
}
