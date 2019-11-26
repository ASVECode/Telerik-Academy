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
    '3',
    '2',
    '-1',
    '4'
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let numberCount = +gets();
let priceD = 0;

for(let i =1; i<=numberCount; i++){
    let price = +gets();
    priceD = price*(1-0.65);
    print((Math.round((priceD + 0.00001) * 100) / 100).toFixed(2));
}