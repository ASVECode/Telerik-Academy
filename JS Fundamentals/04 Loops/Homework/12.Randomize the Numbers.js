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
   10
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

let result = arr.join(' ');

print(result);
