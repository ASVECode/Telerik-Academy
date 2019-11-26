let input = [
    '100000'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let zeroCounter = 0;

for (i = 5; i <= n; i += 5) {
    let num = i;

    while (num % 5 === 0) {
        zeroCounter++;
        num /= 5;
    }
}

print(zeroCounter);