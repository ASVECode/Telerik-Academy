
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [3,2,5,1];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numberCount = +gets();
let minNumber = Number.MAX_SAFE_INTEGER;
let maxNumber = Number.MIN_SAFE_INTEGER;
let sum = numberCount;

for (let i = 1; i <= numberCount; i++) {
    let number = +gets();

    if (number < minNumber) {
        minNumber = number;
    }

    if (number > maxNumber) {
        maxNumber = number;
    }
    sum += number;
}
print('min = ' + minNumber.toFixed(2));
print('max = ' + maxNumber.toFixed(2));
print('sum = ' + sum.toFixed(2));
print('avg = ' +((sum / (numberCount + 1)).toFixed(2)));