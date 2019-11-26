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
    5,
    -4
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let x = +gets();
let sum = 1;
let xN;

for (let i = 1; i <= n; i++) {
    result = 1;
    for (let k = 0; k < i; k++) {
        result *= i - k;
    }

    xN = result / (Math.pow(x, i));
    sum += xN;
}
print(sum.toFixed(5));