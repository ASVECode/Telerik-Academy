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
    -1, 3, 0
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

let x1 = ((-1 * b) - Math.sqrt(b * b - (4 * a * c))) / (2 * a);
let x2 = ((-1 * b) + Math.sqrt(b * b - (4 * a * c))) / (2 * a);

let roots = (`x1=${x1}; x2=${x2}`);
print(roots);