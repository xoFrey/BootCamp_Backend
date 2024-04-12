import fs from "fs";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const readJsonFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, buff) => {
      if (err) return rej(err);
      const jsObj = JSON.parse(buff.toString());
      res(jsObj);
    });
  });
};

const writeJsonFile = (path, jsObj) => {
  return new Promise((res, rej) => {
    const jsonString = JSON.stringify(jsObj, null, 2);
    fs.writeFile(path, jsonString, (err) => {
      if (err) return rej(err);
      res(jsObj);
    });
  });
};

const readTodoList = () => {
  return readJsonFile(__dirname + "/data/toDoList.json");
};

const writeToDoList = (todoArray) => {
  return writeJsonFile(__dirname + "/data/toDoList.json", todoArray);
};

export { readTodoList, writeToDoList };
