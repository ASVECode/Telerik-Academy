let input = [
    '10',
    '10',
    '15',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let min = +gets();
let max = +gets();
let result = '';
for (let i = 0; i < n; i++) {
    result += `${Math.floor(Math.random() * (max - min + 1)) + min} `;
}
print(result.trim());
