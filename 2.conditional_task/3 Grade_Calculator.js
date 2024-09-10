/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


const examNumber = 66;

if(examNumber>100 || examNumber<0){
    console.log("Give a valide number around 0- 100");
}
else if(examNumber<=100 && examNumber >=90){
    console.log("Your grade point is : A");
}
else if(examNumber<=89 && examNumber >=80){
    console.log("Your grade point is : B");
}
else if(examNumber<=79 && examNumber >=70){
    console.log("Your grade point is : C");
}
else if(examNumber<=69 && examNumber >=60){
    console.log("Your grade point is : D");
}
else{
    console.log("You failed");
}