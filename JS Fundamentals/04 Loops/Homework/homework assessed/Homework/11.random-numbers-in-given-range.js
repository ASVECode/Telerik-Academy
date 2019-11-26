let input = [
    '5',
    '7',
    '11'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let min = Number(gets());
let max = Number(gets());
let randomNumbers = '';

while (n >= 1) {
    let randomNumber = Math.round(Math.random() * (max - min) + min);
    randomNumbers += randomNumber + ' ';
    n--;
}

print(randomNumbers);