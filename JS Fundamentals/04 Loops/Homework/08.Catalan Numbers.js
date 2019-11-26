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
   15
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();

// declarations
let quotient = 1;  // (2n)! / n!
let factorialNPlus1 = 1; // (n + 1)!

// logic
for (let i = n + 1; i <= 2 * n; i++) {
    quotient *= i;
}

for (let j = 1; j <= (n + 1); j++) {
    factorialNPlus1 *= j;
}

// final calculations and print
print(quotient / factorialNPlus1);