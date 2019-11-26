const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [100];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets()
for (let i = 2; i <= 1000; i++) {
    if (n % i == 0) {
        print(`${i}`)
        n /=i
        i--
    }
}