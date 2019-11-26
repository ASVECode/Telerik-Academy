const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`3 10 4 6 5 1`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = gets().split(' ').map(Number);
let evenProduct = 1;
let oddProduct = 1;

for (let i = 0; i < numbers.length; i += 1) {
    let num = numbers[i];
    if (i === 0 || i % 2 === 0) {
        oddProduct *= num
    } else {
        evenProduct *= num
    }
}

if (oddProduct == evenProduct) {
    print(`yes
product = ${oddProduct}`)
} else {
    print(`no 
odd_product = ${oddProduct} 
even_product = ${evenProduct}`)
}