const person1 = {
  name: "Beate",
  age: 39,
  email: ["beate@gmail.com", "b.huber@company.com"],
  memberSince: Date.now(),
};
const person2 = {
  name: "Adrian",
  age: 31,
  email: ["adrian@gmail.com", "a.huber@company.com"],
  memberSince: Date.now(),
};

// * Export alte Schreibweise
module.exports = { beate: person1, adrian: person2 };

// exports.beate = person1;
// exports.adrian = person2;

// * neue Schreibweise
