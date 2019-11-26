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

let result = 0;
for (let i = 5; i <= n; i += 5) {
    let num = i;
    while (num % 5 === 0) {
        num /= 5;
        result++;
    }
}
print(result);