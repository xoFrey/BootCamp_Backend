import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const readFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) return rej(err);
      const jsObj = JSON.parse(data.toString());
      res(jsObj);
    });
  });
};


const readToDoList = () => {
  return readFile(__dirname + "/data/toDoList.json");
};

// const writeFileTodo = (path, jsObj) => {
//   return new Promise((res, rej) => {
//     const jsonString = JSON.stringify(jsObj, null, 2);
//     fs.writeFile(path, jsonString, (err) => {
//       if (err) return rej(err);
//       res(jsObj);
//     });
//   });
// };

const writeJsonFile = (path, jsObj) => {
  return new Promise((res, rej) => {
    const jsonString = JSON.stringify(jsObj, null, 2);
    fs.writeFile(path, jsonString, (err) => {
      if (err) return rej(err);
      res(jsObj);
    });
  });
};

const writeTodo = (todoArray) => {
  return writeJsonFile(__dirname + "/data/toDoList.json", todoArray);
};

// const writeTodo = (array) => {
//   return writeFileTodo(__dirname + "/data/toDoList.json", array);
// };
export { readToDoList, writeTodo };
