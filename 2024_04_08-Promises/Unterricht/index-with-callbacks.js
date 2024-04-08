const fs = require("fs");

const readJsonFile = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) return console.log(err);

    const jsonStr = String(data);
    const jsObj = JSON.parse(jsonStr);
    callback(jsObj);
  });
};

const writeJsonFile = (path, jsObj, callback) => {
  const jsonString = JSON.stringify(jsObj);
  fs.writeFile(path, jsonString, (err) => {
    if (err) return console.log(err);

    callback(); //ich bin fertig
  });
};

readJsonFile("./data.json", (result) => {
  if (!Array.isArray(result)) console.log("not a js array,  will abort");

  const onlyNumbers = result.filter((item) => typeof item === "number");
  console.log(onlyNumbers);

  writeJsonFile("./data.json", onlyNumbers, () => {
    console.log("done");
  });
});
