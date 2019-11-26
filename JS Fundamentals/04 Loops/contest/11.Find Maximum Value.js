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
    3,1,2,3
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let N = Number(gets());
let maxNumber = Number.MIN_SAFE_INTEGER
if (N >= 1 && N <= 20) {
    for (let i = 1; i <= N; i++) {

        let currentNumber = +gets();
        if (currentNumber >= -200 && currentNumber <= 200) {
            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
    }
    print(maxNumber);
}

