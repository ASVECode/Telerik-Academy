
let input = [
    '99',
    '7',


];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let n = +gets();
let k = +gets();
let nFact = BigInt(1);
let kFact = BigInt(1);
let nkFact = BigInt(1);

for (i = BigInt(2); i <= n; i++) {
    nFact *= i
    if (i <= k) {
        kFact *= i
    }
    if (i <= (n - k)) {
        nkFact *= i
    }
}
print(nFact / (kFact * nkFact))