const fs = require("fs");
const data = require("./data.json");


data.map((item) => {
  fs.appendFile(
    "./data.txt",
    `${item.id} - ${item.title} \n ${item.description} \n \n`,
    (err) => {
      if (err) console.log("no");
    }
  );
});
