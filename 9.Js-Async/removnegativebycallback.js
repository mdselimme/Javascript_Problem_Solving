const arr = [0, 5, 4 - 1, 5, -3, -4, 5, -10];

const removeNegative = (number, negaFunc) => {
  const numbers = [];
  number.forEach((element) => {
    if (negaFunc(element)) {
      numbers.push(element);
    }
  });
  return numbers;
};

const negative = removeNegative(arr, (n) => n >= 0);

console.log(negative);
