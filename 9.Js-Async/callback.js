const printAns = (data) => {
  console.log(data);
};

const func_One = (a, b, printAns) => {
  const sum = a + b;
  printAns(sum);
};

const func_Two = (a, b, printAns) => {
  const sum = a + b;
  printAns(sum);
};

func_Two(10, 15, printAns);
func_One(20, 15, printAns);
