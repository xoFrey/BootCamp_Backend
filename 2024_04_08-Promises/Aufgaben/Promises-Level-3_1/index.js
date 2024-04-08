const multiplyNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num != "number") throw "pls put number in, thank you";

    const multiply = num * num;

    resolve(multiply);
  });
};

const chainMul = (num) => {
  return multiplyNumber(num)
    .then((result) => multiplyNumber(result))
    .then((result) => multiplyNumber(result))
    .then((result) => multiplyNumber(result));
};

chainMul(3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
