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
    2000
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let year = +gets();
let chineseYear = (year - 4) % 12;

switch (chineseYear) {
    case 0:
        print('Rat'); break;

    case 1:
        print('Ox'); break;

    case 2:
        print('Tiger'); break;

    case 3:
        print('Hare'); break;

    case 4:
        print('Dragon'); break;

    case 5:
        print('Snake'); break;

    case 6:
        print('Horse'); break;

    case 7:
        print('Goat'); break;

    case 8:
        print('Monkey'); break;

    case 9:
        print('Rooster'); break;

    case 10:
        print('Dog'); break;

    case 11:
        print('Pig'); break;
}
