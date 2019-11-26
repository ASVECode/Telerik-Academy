function rFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}

let n = 4;
let x = 3;
let sum = 1;
let num;
let den;

for (i = 1; i <= n; i++) {
    num = rFact(i);
    den = Math.pow(x, i);
    sum = sum + num/den;
}
console.log(sum.toFixed(5));