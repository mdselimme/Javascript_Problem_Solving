/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let square;

for(let i=1; i<=20; i++){
    square = i**2;
    if(square!==1){
        if(square===i**2){
            console.log("square = " , i**2 ,square);
            break;
        }
    }
}