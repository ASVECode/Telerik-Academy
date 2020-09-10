const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    5,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const steps = +gets();
const map = Array.from({
    length: steps,
}).fill('.');
for (let i = 0; i < steps; i++) {
    if (i > 0) {
        map[i - 1] = '.';
    }
    map[i] = '*';
    print(map.join(''));
}
for (let i = 2; i <= steps; i++) {
    map[steps - i] = '*';
    map[steps - i + 1] = '.';
    print(map.join(''));
}