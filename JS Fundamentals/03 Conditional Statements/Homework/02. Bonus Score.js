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
    9
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let score = +gets();

if (score >= 1 && score <= 3) {
    print(score * 10);
} else if (score >= 4 && score <= 6) {
    print(score * 100);
} else if (score >= 7 && score <= 9) {
    print(score * 1000);
} else {
    print('Invalid score');
}