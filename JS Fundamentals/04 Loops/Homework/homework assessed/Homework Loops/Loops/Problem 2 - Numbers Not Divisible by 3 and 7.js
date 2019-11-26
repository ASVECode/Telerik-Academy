const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`25`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let line = '';

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
        continue;
    } else if (i % 7 === 0) {
        continue;
    }
    line += i + ' ';
}
print(line)