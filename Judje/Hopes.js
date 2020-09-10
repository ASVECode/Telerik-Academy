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
    '2, -4, -6, 10, 2, 1, 5',
    '3',
    '3, 2, -1',
    '2, 2, -4',
    '2, -3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(', ').map(Number);
const n = +gets();
const sums = [];

for (let i=0; i<n; i+=1) {
    let sum = 0;
    let start = 0;
    const carrots = input.slice();
    sum += carrots[start];
    carrots[start] = 'x';
    const directions = gets().split(', ').map(Number);
    for (const direction of directions) {
        start = start + direction;
        if (carrots[start] === 'x' || typeof carrots[start] === 'undefined') {
            break;
        }
        sum += carrots[start];
        carrots[start] = 'x';
    }
    sums.push(sum);
}

print(Math.max(...sums));