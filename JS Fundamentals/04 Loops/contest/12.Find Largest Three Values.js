const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [6,9,11,3,2,1,8];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let firstNum = Number.MIN_SAFE_INTEGER;
let secondNum = Number.MIN_SAFE_INTEGER;
let thirdNum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++)
{
    let currentNum = +gets();

    if (currentNum > firstNum)
    {
        thirdNum = secondNum;
        secondNum = firstNum;
        firstNum = currentNum;
    }
    else if (currentNum > secondNum)
    {
        thirdNum = secondNum;
        secondNum = currentNum;

    }
    else if (currentNum > thirdNum)
    {
        thirdNum = currentNum;
    }
}
print(`${firstNum}, ${secondNum} and ${thirdNum}`);