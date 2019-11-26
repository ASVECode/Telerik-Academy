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
    1, 0.5 , 5.1
  ];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

if (a === 0 || b === 0 || c === 0) {
    print(0);
} else if (a < 0 && b < 0 && c < 0) {
    print('-');
} else if (a < 0 && b > 0 && c > 0) {
    print('-');
} else if (b < 0 && a > 0 && c > 0) {
    print('-');
} else if (c < 0 && a > 0 && b > 0) {
    print('-');
} else {
    print('+');
}