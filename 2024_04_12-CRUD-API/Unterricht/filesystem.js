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

const readTransactions = () => {
  return readJsonFile(__dirname + "/data/transactions.json");
};

const writeTransactions = (transactionsArray) => {
  return writeJsonFile(
    __dirname + "/data/transactions.json",
    transactionsArray
  );
};

export { readJsonFile, readTransactions, writeTransactions, writeJsonFile };
