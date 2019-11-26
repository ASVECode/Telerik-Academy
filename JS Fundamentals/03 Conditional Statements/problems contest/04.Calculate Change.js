const getGets = (arr) => {
  let index = 0;

  return () => {
      const toReturn = arr[index];
      index += 1;
      return toReturn;
  };
};
// this is the test
const test = [
  1.15,
  2
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let price = Number(gets());
let paid = Number(gets());

let change = Math.abs(price - paid);

let oneLevCoins = 0
let fifthyStotinki = 0
let twnetyStotinki = 0
let tenStotinki = 0
let fiveStotinki = 0
let twoStotinki = 0
let oneStotinka = 0

if (change >= 1) {
  change -= 1;
  oneLevCoins += 1;
}

if (change >= 1) {
  change -= 1;
  oneLevCoins += 1;
}

if (change >= 1) {
  change -= 1;
  oneLevCoins += 1;
}

if (change >= 0.5) {
  change -= 0.5;
  fifthyStotinki += 1;
}

if (change >= 0.2) {
  change -= 0.2;
  twnetyStotinki += 1;
}

if (change >= 0.2) {
  change -= 0.2;
  twnetyStotinki += 1;
}

if (change >= 0.1) {
  change -= 0.1;
  tenStotinki += 1;
}

if (change >= 0.05) {
  change -= 0.05;
  fiveStotinki += 1;
}

if (change >= 0.02) {
  change -= 0.02;
  twoStotinki += 1;
}
let parsedChange = Number(change.toFixed(2));
if (parsedChange >= 0.02) {
  change -= 0.02;
  twoStotinki += 1;
}

if (change >= 0.01) {
  change -= 0.01;
  oneStotinka += 1;
}

if (oneLevCoins > 0) {
  print(`${oneLevCoins} x 1 lev`)
}

if (fifthyStotinki > 0) {
  print(`${fifthyStotinki} x 50 stotinki`)
}

if (twnetyStotinki > 0) {
  print(`${twnetyStotinki} x 20 stotinki`)
}

if (tenStotinki > 0) {
  print(`${tenStotinki} x 10 stotinki`)
}

if (fiveStotinki > 0) {
  print(`${fiveStotinki} x 5 stotinki`)
}

if (twoStotinki > 0) {
  print(`${twoStotinki} x 2 stotinki`)
}

if (oneStotinka > 0) {
  print(`${oneStotinka} x 1 stotinka`)
}
