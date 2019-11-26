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
    4
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = Number(gets());
for (let i = 1; i <= num; i++) {
    let result = ' ';
    for (let j = 1; j <= num; j++) {
        result += (i + (j - 1)) + ' ';
    }
    print(result);
}