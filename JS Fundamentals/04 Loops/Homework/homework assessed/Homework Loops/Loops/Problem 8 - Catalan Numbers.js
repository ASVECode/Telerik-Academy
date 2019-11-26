const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`15`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// overflow possible => BigInt needed when working with bigger numbers;
// else => same code with Number() instead of BigInt();

function factorializeBigInt(num) {
    if (num == 0 || num == 1)
        return BigInt(1);
    for (let i = num - BigInt(1); i >= BigInt(1); i--) {
        num *= i;
    }
    return num;
}

let n = +gets();
n = BigInt(n);
let nTimes2 = BigInt(2) * n;
let nPlus1 = BigInt(1) + n;

let result = BigInt(factorializeBigInt(nTimes2) / (factorializeBigInt(nPlus1) * factorializeBigInt(n)));
print(result)