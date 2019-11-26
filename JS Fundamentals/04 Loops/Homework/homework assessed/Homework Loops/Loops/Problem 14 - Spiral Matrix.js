const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [4];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n*n array
let counter = 1;
let startCol = 0;
let endCol = n - 1;
let startRow = 0;
let endRow = n - 1;
while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
        result[startRow][i] = counter;
        counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
        result[j][endCol] = counter;
        counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
        result[endRow][i] = counter;
        counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
        result[i][startCol] = counter;
        counter++;
    }
    startCol++;
}
console.log(result.map(a => a.join(' ')).join('\n'));