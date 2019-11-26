// Input.
let input = [
    '99',
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = BigInt(gets());
let nFact = BigInt(1)
let n1Fact = BigInt(1)
let n2Fact = BigInt(1)

for (i = BigInt(1); i <= BigInt(2) * n; i++) {
    n2Fact *= i;
    if (i <= n) {
        nFact *= i;
    }
    if (i <= (n + BigInt(1))) {
        n1Fact *= i;
    }
}
print(n2Fact / (n1Fact * nFact))