const doubleNumner = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number != "number") throw "not a number";

    setTimeout(() => {
      const double = number * 2;
      resolve(double);
    }, 2000);
  });
};

doubleNumner(2)
  .then((double) => console.log(double))
  .catch((err) => console.log(err));
doubleNumner("Yo")
  .then((double) => console.log(double))
  .catch((err) => console.log(err));
