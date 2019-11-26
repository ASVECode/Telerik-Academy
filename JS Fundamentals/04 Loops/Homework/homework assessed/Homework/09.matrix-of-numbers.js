let input = [
    '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let currentNumber = 0;
let matrix = '';

for (let i = 1; i <= n; i++) {
    matrix = '';
    currentNumber = i;

    for (let j = 1; j <= n; j++) {
        matrix += currentNumber + ' ';
        currentNumber += 1;
    }
    print(matrix);
}