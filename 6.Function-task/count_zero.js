// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString){
    if(typeof binaryString === "string"){
        let zerosting ="";
        for(const num of binaryString){
            if(num ==0){
                zerosting+=num;
            }
        }
        return zerosting.length;    
};
};

const brString = "0110100010";

const result = count_zero(brString);

console.log(result);

