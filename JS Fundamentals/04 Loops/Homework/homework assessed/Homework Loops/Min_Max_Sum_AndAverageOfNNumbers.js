var input = [
    '3',
    '2',
    '5',
    '1',
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let sequance = [];
let sum = 0;

for (i = 0; i < n; i++) {

    sequance[i] = +gets();
    sum += sequance[i];
}

print('min= ' + Math.min.apply(Math, sequance));
print('max= ' + Math.max.apply(Math, sequance));
print('sum = ' + sum);
print('avr= ' + (sum / n).toFixed(2));