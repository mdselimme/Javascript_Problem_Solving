//isNan means a value of a variable is number or text; if the value is a number and also a string it gives answer true; On the other only the variable value is false when the value is text;


var isnan = isNaN("11");

var isnanTwo = isNaN(2-11);

var textNum = "hello";

console.log(isNaN(textNum));

function isNumberMake(a){
    if(a){
        console.log("This is Not a number");
    }
    
    else{
        console.log("This is number");
    }
};

isNumberMake(isnan);
isNumberMake(isnanTwo);
isNumberMake(textNum);