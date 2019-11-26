const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`10`, `10`, `15`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let min = +gets();
let max = +gets();
let line = '';

for (let i = 1; i <= n; i++) {
    line += Math.round(Math.random() * (max - min)) + min + ' ';
}
print(line)