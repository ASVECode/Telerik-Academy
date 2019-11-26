const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '3',
    '2'
    
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


let n = +gets();
let x = +gets();
let N = 1;
let nxn = 1;
let sum =1;
for (let i = 1; i <= n; i++) {
    N = N * i;
    nxn = N / (Math.pow(x, i));
}
sum += nxn;
print(sum)