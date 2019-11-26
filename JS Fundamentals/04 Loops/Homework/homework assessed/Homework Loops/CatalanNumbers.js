function rFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}

let n = 15;
let factorial = 0;

factorial = (rFact(2*n)) / ((rFact(n+1)) * rFact(n));
console.log(Math.round(factorial));