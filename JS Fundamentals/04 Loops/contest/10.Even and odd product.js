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
    5,2,1,1,6,3
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = +gets();
let n = [];
let even = 1;
let odd = 1;

for (let i = 1; i <= num; i++) {
    n[i] = +gets();
    if (i % 2 == 0) {
        even *= n[i];
    } else {
        odd *= n[i]
    }
}


if (even == odd) {
    print('yes', even);
} else {
    print('no', odd, even);
}