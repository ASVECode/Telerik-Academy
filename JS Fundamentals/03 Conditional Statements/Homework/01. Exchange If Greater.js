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
    5.5, 4.5
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();

if (a > b) {
    print(b + ' ' + a);
} else {
    print(a + ' ' + b);
};