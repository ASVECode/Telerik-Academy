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
    -2, -1, -3
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

if (a > b && a > c){
    print(a);
}else if (b > a && b > c){
    print(b);
} else{
    print(c);
}

//print(Math.max(a, b, c));