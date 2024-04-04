// ! Variante 1

const beate = {
  name: "Beate",
  age: 39,
  email: ["beate@gmail.com", "b.huber@company.com"],
  memberSince: Date.now(),
};
const adrian = {
  name: "Adrian",
  age: 31,
  email: ["adrian@gmail.com", "a.huber@company.com"],
  memberSince: Date.now(),
};

// * Export alte Schreibweise
// node.js standard => man braucht kein weiteres Setup
// module.exports = { beate: person1, adrian: person2 };

// exports.beate = person1;
// exports.adrian = person2;

// * neue Schreibweise
// type: module schreibweise => package.json erstellen mit name der datei und "type":"module"

export default { beate, adrian };

// ! Variante 2
// wenn man named export haben möchte und nicht val => val.key

const thomas = {
  name: "Thomas",
  age: 42,
  email: ["thomas@gmail.com", "t.huber@company.com"],
  memberSince: Date.now(),
};
const even = {
  name: "Even",
  age: 25,
  email: ["even@gmail.com", "e.huber@company.com"],
  memberSince: Date.now(),
};

export { thomas, even };
