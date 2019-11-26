const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`100000`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// overflow possible => BigInt needed when working with bigger numbers;
// else - same code with Number() instead of BigInt();

let n = +gets();
n = BigInt(n);

function factorializeBigInt(num) {
    if (num == 0 || num == 1)
        return BigInt(1);
    for (let i = num - BigInt(1); i >= BigInt(1); i--) {
        num *= i;
    }
    return num;
}

n = factorializeBigInt(n).toString();
let zeroes = 0;

for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === `0`) {
        zeroes++;
    } else {
        break;
    }
}
print(zeroes);