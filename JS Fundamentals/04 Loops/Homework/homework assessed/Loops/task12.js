let input = [
    '10',
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let a = +gets();
let arr = [];
for (i = 1; i <= a; i++) {
    arr.push(i);
}
for (let i = 0; i < 10; i++) {
    let randomizer = Math.floor(Math.random() * 10);
    [arr[i], arr[randomizer]] = [arr[randomizer], arr[i]];
}
print(arr.join(' '));



