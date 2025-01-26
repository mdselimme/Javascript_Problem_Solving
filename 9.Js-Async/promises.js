const promise = new Promise((resolve, reject) => {
  let x = 1;
  if (x == 0) {
    resolve("Value");
  }

  reject("Error");
});

promise.then(
  (value) => {
    console.log("Success", value);
  },
  (err) => {
    console.log("failed", err);
  }
);
