const firstElement = (array) => {
  return array[0];
};

const allExceptLast = (array) => {
  let newNames = [];
  for (let i = 0; i < array.length - 1; i++) {
    newNames.push(array[i]);
  }
  return newNames;
};

const lastElement = (array) => {
  return array[array.length - 1];
};

const allExceptFirst = (array) => {
  let newNames = [];
  for (let i = 1; i < array.length; i++) {
    newNames.push(array[i]);
  }
  return newNames;
};

const removeElement = (array, word) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != word) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const uniqueElement = (array) => {
  const newArray = array.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );
  return newArray;
};

const sumArray = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const stringFirstLetterCap = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const stringCap = (string) => {
  return string.toUpperCase();
};

const lastLetterMatch = (string, letter) => {
  if (string[string.length - 1] === letter) {
    return true;
  } else {
    return false;
  }
};

export {
  firstElement,
  allExceptLast,
  lastElement,
  allExceptFirst,
  removeElement,
  uniqueElement,
  sumArray,
  randomNumber,
  stringFirstLetterCap,
  stringCap,
  lastLetterMatch,
};
