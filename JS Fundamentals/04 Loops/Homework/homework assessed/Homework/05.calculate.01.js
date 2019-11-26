let input = [
    '5',
    '-4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let x = Number(gets());
let factorial = 1;
let sum = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    sum += factorial / x ** i;
}

print(sum.toFixed(5));