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
    2, 12.57
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let r = +gets();

// perimeter= 2*Pi*r
let perimeter = 2 * Math.PI * r;

//area = 2*Pi*r**2
let area = Math.PI * r ** 2;

print(perimeter.toFixed(2), area.toFixed(2));