const timeoutAPeriod1 = Math.ceil(Math.random() * 10) * 1000;
const timeoutBPeriod1 = Math.ceil(Math.random() * 10) * 1000;

const timeoutAPeriod = 3000;
const timeoutBPeriod = 4000;

console.log(timeoutAPeriod1);
console.log(timeoutBPeriod1);

setTimeout(function timeourCallback() {
  console.log("fertig timeout A");
}, timeoutAPeriod1);

setTimeout(function timeourCallback() {
  console.log("fertig timeout B");
}, timeoutBPeriod1);

console.log(timeoutAPeriod);
console.log(timeoutBPeriod);

setTimeout(function timeourCallback() {
  setTimeout(function timeourCallback() {
    console.log("fertig timeout B");
  }, timeoutAPeriod);
  console.log("fertig timeout A");
}, timeoutBPeriod);

// # Event Loop => allows non-blocking operations => Synchrone Operationen werden hintereinander geschaltet, während asynchrone in eine Queue gesetzt werden
