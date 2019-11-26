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
    -3,	-0.5, -1.1,	-2,	-0.1, -0.1
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());
let d = Number(gets());
let e = Number(gets());

if (a > b && a > c && a > d && a > e) {
    print(a);
} else if (b > a && b > c && b > d && b > e){
    print(b);
} else if(c > a && c > b && c > d && c > e){
    print (c);
}else if(d > a && d > b && d > c && d > e) {
    print(d);
}else {
    print(e);
}

//print(Math.max(a, b, c, d, e));