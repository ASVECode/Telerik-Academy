let input = [
    '9'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let numArray = [];

while (n >= 1) {
    numArray.push(n);
    n--;
}

for (i = numArray.length - 1; i > 0; i--) {
    let j = Math.round(Math.random() * i);
    let temp = numArray[i];
    numArray[i] = numArray[j];
    numArray[j] = temp;
}
let numString = '';

for (let element of numArray) {
    numString += element + ' ';
}

print(numString);