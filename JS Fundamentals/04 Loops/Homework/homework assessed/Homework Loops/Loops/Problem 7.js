const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [52, 5];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Calculate N! / (K! * (N-K)!)
// overflow possible => BigInt needed when working with bigger numbers;
// else - same code with Number() instead of BigInt();

let n = +gets();
let k = +gets();
n = BigInt(n);
k = BigInt(k);

function factorializeBigInt(num) {
    if (num == 0 || num == 1)
        return BigInt(1);
    for (let i = num - BigInt(1); i >= BigInt(1); i--) {
        num *= i;
    }
    return num;
}

print(BigInt(factorializeBigInt(n) / (factorializeBigInt(k) * factorializeBigInt(n - k))));