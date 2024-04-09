const { log } = require("console");
const fs = require("fs");

// Buffer <Buffer 5b 31 2c 20 32 2c 20 33 2c 20 7b 20 22 68 65 6c 6c 6f 22 3a 20 22 77 6f 72 6c 64 22 20 7d 5d 0d 0a> => JSON String [1, 2, 3, { "hello": "world" }] => JS Array / Object

const readJsonFile = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) return console.log(err);

    const jsonStr = String(data);
    const jsObj = JSON.parse(jsonStr);
    // 2. parameter ist die callbackfunktion die man im äußeren aufruft mit parameter von dem wert mit dem man weiter arbeiten möchte.
    callback(jsObj);
  });
};

readJsonFile("./data.json", (jsObj) => {
  console.log(jsObj);
});

// !Immer noch eine Callback-Hell (mit verschiedenen paths die man einliest)
// readJsonFile("./data.json", (jsObj) => {
//     readJsonFile("./data.json", (jsObj) => {
//         readJsonFile("./data.json", (jsObj) => {
//             readJsonFile("./data.json", (jsObj) => {
//                 console.log(jsObj);
//               });
//           });
//       });
// });

const test = (num) => {
  const result = num + 1;
};

console.log(result );