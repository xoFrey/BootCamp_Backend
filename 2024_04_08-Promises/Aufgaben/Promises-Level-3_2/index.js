const numberTime = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num != "number") throw "pls, write number";

    setTimeout(() => {
      const randomNumber = Math.round(Math.random() * 10 * 100);
      resolve(randomNumber);
    }, num);
  });
};

Promise.all([numberTime(1000), numberTime(1000), numberTime(1000)])
  .then((number) => console.log(number))
  .catch((err) => console.log(err));
