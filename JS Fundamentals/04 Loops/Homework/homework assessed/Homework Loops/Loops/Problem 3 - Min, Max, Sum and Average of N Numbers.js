const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`3`, `2`, `5`, `1`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let sum = n;
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
    let number = +gets();
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
    sum += number;
}
let average = sum / (n + 1);
print(`min = ${min}
max = ${max}
sum = ${sum}
avg = ${average.toFixed(2)}`)