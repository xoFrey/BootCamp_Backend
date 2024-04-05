const fs = require("fs");

if (!fs.existsSync("./data/")) {
  fs.mkdir("./data", (err) => {
    if (!err) console.log("created folder");
  });
}

const writeText = (text) => {
  fs.appendFile("./data/file.txt", `\n ${text}`, (err) => {
    if (err) console.log(err);
  });
};

writeText("Hallo ich bin Izel!");
writeText("Ich bin Webdeveloperin soon!");
