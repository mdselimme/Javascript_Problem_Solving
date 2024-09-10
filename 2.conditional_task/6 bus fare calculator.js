/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const childrenAge = 8;
const fare=800;

if(childrenAge<10){
    console.log("Free fare");
}else if(childrenAge== "student"){
    console.log(fare*(50/100));
}else if(childrenAge >=60){
    console.log(fare*(15/100));
}else{
    console.log("Reguler fare : ", fare);
}