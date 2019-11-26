let input = [
    '8',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let k = Number(gets());
let nFactorial = 1;
let kFactorial = 1;

for (let i = 1; i <= n; i++) {

    if (i <= k) {
        kFactorial = kFactorial * i;
    }
    nFactorial = nFactorial * i;
}

print(nFactorial / kFactorial);