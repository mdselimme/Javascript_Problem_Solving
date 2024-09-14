

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let num = 91;
let sum = 0;
while(num<=129){
    if(num%2!==0){
        let num1 = sum;
        sum += num;
        console.log(num1 + " + " + num + " = " + sum);
    }
    num++;
}


/*

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let num2 = 51;
let sum2 = 0;
while(num2<=85){
    if(num2%2==0){
        let num1 = sum2;
        sum2 += num2;
        console.log(num1 + " + " + num2 + " = " + sum2);
    }
    num2++;
}



/*programming hero*/