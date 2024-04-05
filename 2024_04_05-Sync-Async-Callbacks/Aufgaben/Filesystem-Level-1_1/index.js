import * as fs from "fs";

fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper!", (err) => {
  if (err) return console.log(err);
});

fs.writeFile("./blog2.txt", "Beliebiger text", (err) => {
  if (err) return console.log(err);
});

if (fs.existsSync("./assets/")) {
  fs.rmdir("./assets/", (err) => {
    if (!err) console.log("deleted assets folder");
  });
} else {
  fs.mkdir("./assets", (err) => {
    if (!err) console.log("created assets folder");
  });
}
if (fs.existsSync("./delete.txt")) {
  fs.unlink("./delete.txt", (err) => {
    if (!err) console.log("Deleted delete.txt");
  });
} else {
  fs.writeFile("./delete.txt", "Hallo ich bin die Delete datei", (err) => {
    if (!err) console.log("Created delete.txt");
  });
}

if (fs.existsSync("./Hello.txt")) {
  fs.renameSync("./Hello.txt", "./HelloWorld.txt");
} else {
  fs.writeFile("./Hello.txt", "Hello World, pls rename me!", (err) => {
    if (!err) console.log("Created Hello.txt");
  });
}
