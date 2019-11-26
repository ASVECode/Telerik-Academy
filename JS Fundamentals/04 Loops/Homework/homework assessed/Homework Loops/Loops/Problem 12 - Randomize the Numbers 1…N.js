const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`10`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let line = [];
for (let i = 1; i <= n; i++) {
    line.push(i);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
print(shuffle(line));