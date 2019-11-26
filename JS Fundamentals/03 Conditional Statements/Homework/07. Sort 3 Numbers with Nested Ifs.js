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
    -2, -2, 1
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

if (a > b && a > c) {
    if (b > c) {
        print(a, b, c);
    } else {
        print(a, c, b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        print(b, a, c)
    } else {
        print(b, c, a)
    }
} else {
    if (a > b) {
        print(c, a, b);
    } else {
        print(c, b, a);
    }
}