let n = 3;
let printRandom = "";

function randomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

for (i = 0; i < n; i++) {
  printRandom = printRandom + " " + randomNumber(n);
}
console.log(printRandom);
