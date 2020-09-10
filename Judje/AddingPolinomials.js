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
    3,
    '5 0 1',
    '7 4 -3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const firstArray = gets().split(' ').map(Number);
const secondArray = gets().split(' ').map(Number);
const holder = [];
for (let i = 0; i < n; i++) {
    holder[i] = firstArray[i] + secondArray[i];
}
print(holder.join(' '));