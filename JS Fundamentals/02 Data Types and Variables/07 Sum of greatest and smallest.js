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
    1, 2, 3
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

print(Math.min(a, b, c) + Math.max(a, b, c));