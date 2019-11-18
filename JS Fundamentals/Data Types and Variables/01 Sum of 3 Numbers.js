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
    3, 4, 11
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = 2
const b =5
const c = -3


let x1 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
print(Math.abs(x1))

let x2 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
print(Math.abs(x2))
