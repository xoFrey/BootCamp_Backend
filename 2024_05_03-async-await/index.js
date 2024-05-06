const greet = (name) => {
  return new Promise((resolve, reject) => {
    if (!name) return reject("name must be defined");
    setTimeout(() => {
      resolve("Hallo " + name);
    }, 1000);
  });
};

// ! const greetLowerCaseAndWelcome = async (name) => {}

async function greetLowerCaseAndWelcome(name) {
  const greeting = await greet(name);
  const greetingLow = greeting.toLowerCase();
  return { greeting: greeting, welcome: greetingLow + " Willkommen!" };
}

async function run() {
  try {
    const result = await greetLowerCaseAndWelcome("Beate");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

run();
