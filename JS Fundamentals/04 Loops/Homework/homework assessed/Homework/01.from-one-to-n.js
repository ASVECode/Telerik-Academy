let input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());
let output = '';

for (let i = 1; i <= number; i++) {
    output += i + ' ';
}

print(output);