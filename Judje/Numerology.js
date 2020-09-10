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
    '18790314',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const calculate = (a, b) => {
    return ((a + b) * (a ^ b)) % 10;
};
const numerology = (input, finalResult) => {
    if (input.length === 1) {
        finalResult[input[0]] += 1;
        return;
    }
    for (let i = 0; i < input.length - 1; i++) {
        const a = input[i];
        const b = input[i + 1];
        const result = calculate(a, b);
        input.splice(i, 2, result);
        numerology(input, finalResult);
        input.splice(i, 1, a, b);
    }
};
const input = gets().split('').map(Number);
const finalResult = Array.from({
    length: 10,
}).fill(0);
numerology(input, finalResult);
print(finalResult.join(' '));

// 0 1006 0 286 0 1473 0 205 0 2070
// (a + b) * (a ^ b) % 10