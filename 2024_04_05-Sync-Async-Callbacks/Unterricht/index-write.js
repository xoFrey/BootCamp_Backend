const fs = require("fs");

const text = " Hallo ich bin Izel und möchte das in eine Datei einspeichern. ";

fs.writeFile("./textOutput", text, (err) => {
  if (err) return console.log(err);

  console.log("Done writing file");
});

// *Andere Schreibweise
// fs.writeFile("./textOutput", text, (err) => {
//   if (!err) return console.log("Done writing file");
//   else console.log(err);
// });
