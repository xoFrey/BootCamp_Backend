const person = {
  name: "Beate",
  age: 21,
  emails: ["beate@gmail.com", "b.huber@company.com"],
};

person.emails[0] = "beate.privat@gmail.com";

console.log(person.emails[0]);

// Von oben nach Unten => Synchrone Code Ausführung
// Gegenstück zu Synchronen Code => Asynchroner Code
