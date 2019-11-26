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

let humanYears = Number(gets());

if (humanYears < 0) {
    print("Age must be positive number.");
} else if (humanYears <= 2) {
    print(humanYears * 10);
} else {
    print(20 + (humanYears - 2) * 4);
}