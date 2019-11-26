let test = [
    4, 3, 2, 5, 2
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(test, 0);


let input = +gets();
//let output = '';
let odd_product = 1;
let even_product = 1;

for (i = 0; i < input; i++) {
    let numbers = +gets()
    if (i % 2 == 0) {
        odd_product *= numbers[i];
    } else {
        even_product *= numbers[i];
    }
}
if (odd_product === even_product) {
    print(`yes\nproduct = ${odd_product}`);
} else {
    print(`no\nodd_product = ${odd_product}\neven_product = ${even_product}`);
}