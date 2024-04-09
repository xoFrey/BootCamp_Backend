const fs = require("fs");

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports = { readFile };
