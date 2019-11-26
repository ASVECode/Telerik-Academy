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
    10, 10, 15
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let min = +gets();
let max = +gets();
let random = ' ';

for (let i = 0; i < n; i++) {
    random += (Math.floor(Math.random() * (max - min + 1)) + min) + ' ';
}
print(random);

