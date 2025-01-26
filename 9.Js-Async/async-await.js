async function myFunc() {
  return "Hello";
}

myFunc().then((val) => {
  console.log(val);
});

const fetchDatabyAsync = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchDatabyAsync("https://jsonplaceholder.typicode.com/users");
