// 1.Create an array of books containing different book.
const books = ["Physics", "Bangla", "Chemistry", "Math", "Javascript"];

// 2. Use the includes method to check if the array contains a javascript book.
let status_result = books.includes("Javascript");

// 3.Print a message to the console indicating whether the element is present in the array or not.
if(status_result){
    console.log("Yes I find my book");
}else{
    console.log("No I can not find my book");
}
