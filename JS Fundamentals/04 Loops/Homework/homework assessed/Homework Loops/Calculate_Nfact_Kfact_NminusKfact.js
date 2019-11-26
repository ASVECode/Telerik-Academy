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
   3,2 

];


function rFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}

let n = 10;
let k = 6;

let factoial = 0;

factoial = rFact(n)/((rFact(k)) * (rFact(n - k)));
console.log(factoial);

