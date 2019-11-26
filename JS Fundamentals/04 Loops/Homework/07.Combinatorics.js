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
   52,
    5
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let k = +gets();

// declarations
let quotient = 1;  // n! / k!
let factorialNMinusK = 1; // (n - k)!

// logic

if (k > 1 && k < n && n < 100) {
    for (let i = k + 1; i <= n; i++) {
        quotient *= i;
    }

    for (let j = 1; j <= (n - k); j++) {
        factorialNMinusK *= j;
    }

    // final calculations and print
    print(quotient / factorialNMinusK);
}
