let n = 10;
let notDivisible = ' ';

for (i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 7 !== 0) {
        notDivisible = notDivisible + ' ' + i;
    }
}
console.log(notDivisible);