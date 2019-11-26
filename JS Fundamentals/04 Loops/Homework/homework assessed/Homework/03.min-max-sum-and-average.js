let input = [
    '2',
    '-1',
    '4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberCount = Number(gets());
let minNumber = Number.MAX_SAFE_INTEGER;
let maxNumber = Number.MIN_SAFE_INTEGER;
let sum = numberCount;

for (let i = 1; i <= numberCount; i++) {
    let number = Number(gets());

    if (number > maxNumber) {
        maxNumber = number;
    }
    if (number < minNumber) {
        minNumber = number;
    }
    sum += number;
}

print('min = ' + minNumber);
print('max = ' + maxNumber);
print('sum = ' + sum);
print('avg = ' + (sum / (numberCount + 1)).toFixed(2));