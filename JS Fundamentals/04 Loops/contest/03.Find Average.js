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
    '4',
    '1,1,1,1'
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let n = gets();
let nums = gets()
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += n[i]
}
print(sum);
