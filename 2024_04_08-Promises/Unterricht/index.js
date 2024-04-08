const fs = require("fs");

const readJsonFile = (path) => {
  return new Promise((resolve, reject) => {
    // async code
    fs.readFile(path, (err, data) => {
      if (err) return reject(err); // promise couldnt be fullfilled => taucht im catch auf

      const jsonStr = String(data);
      const jsObj = JSON.parse(jsonStr);
      resolve(jsObj); // taucht im .then((data)=> {}) auf
    });
  });
};

const writeJsonFile = (path, jsObj) => {
  const jsonString = JSON.stringify(jsObj);
  return new Promise((resolve, reject) => {
    fs.writeFile(path, jsonString, (err) => {
      if (err) return reject(err);
      resolve(); //ich bin fertig, muss nicht zwingend etwas
    });
  });
};

// * Nicht mehr so verschachteln wie hier:

// readJsonFile("./data.json", (result) => {
//   if (!Array.isArray(result)) console.log("not a js array,  will abort");

//   const onlyNumbers = result.filter((item) => typeof item === "number");
//   console.log(onlyNumbers);

//   writeJsonFile("./data.json", onlyNumbers, () => {
//     console.log("done");
//   });
// });

// * Mit Promises arbeiten

const filterNumbers = (result) => {
  if (!Array.isArray(result)) throw "not a js array,  will abort!";

  const onlyNumbers = result.filter((item) => typeof item === "number");
  return onlyNumbers;
};

readJsonFile("./data.json")
  .then((result) => filterNumbers(result))
  .then((onlyNumbers) => writeJsonFile("./data.json", onlyNumbers))
  .then(() => console.log("Done!"))
  .catch((err) => console.log(err));
