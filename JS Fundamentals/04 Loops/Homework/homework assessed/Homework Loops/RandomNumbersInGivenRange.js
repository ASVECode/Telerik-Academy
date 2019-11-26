let n = 10;
let min = 10;
let max = 15;
let printRandom = "";

function randomNumber(min, max) {
  const round = Math.random();
  return Math.round(round * (max - min) + min);
}

for (i = 0; i < n; i++) {
  printRandom = printRandom + " " + randomNumber(min, max);
}

console.log(printRandom);
