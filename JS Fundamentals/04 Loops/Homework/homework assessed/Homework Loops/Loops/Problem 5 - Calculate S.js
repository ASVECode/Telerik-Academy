const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [5, -4];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let N = +gets();
let X = +gets();
let S = 1;
// S = 1 + 1!/x + 2!/x**2 + … + N!/x**N
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
for (let i = 1; i <= N; i++) {
    S += factorialize(i) / X ** i;
}
print(S.toFixed(5));