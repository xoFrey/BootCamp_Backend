const { log } = require("console");
const fs = require("fs");

// const data = fs.readFileSync("./Shorttext.txt", "utf-8");

// console.log(data);

fs.readFile("./Longtext.txt", (err, data1) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data1.length);
    fs.readFile("./Shorttext.txt", (err, data2) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data2.length);
        fs.readFile("./middletext.txt", (err, data3) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data3.length);
            console.log(
              "done, total bytes",
              data1.length + data2.length + data3.length
            );
          }
        });
      }
    });
  }
});
// Reihenfolge von err und data vorgegeben. Erster Parameter ist immer der Errorlog.

// * Zwei möglichkeiten zu encoden => utf-8 oder einfach data.toString()
