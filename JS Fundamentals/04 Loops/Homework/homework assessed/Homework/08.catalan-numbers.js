let input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let nFactorial = 1;
let nTwoFactorial = 1;

for (let i = 1; i <= n * 2; i++) {
    if (i <= n) {
        nFactorial = nFactorial * i;
    }
    nTwoFactorial = nTwoFactorial * i;
}

print(nTwoFactorial / ((nFactorial * (n + 1)) * nFactorial));