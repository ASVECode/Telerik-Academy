let input = [
        '3',
        '2',
        '5',
        '1'
        
    ];
    

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//code 

let n = +gets();

let min = n;

let max = n;

let avg = 0;

let sum = 0;



for (let i = 0; i < n; i++) {
    let a = +gets()
    min = Math.min(min, a);
    max = Math.max(max, a);
    sum += a;
}

print('min = ' + min);
print('max = ' + max);
print('sum = ' + sum);
print('avg =' + (sum/n).toFixed(2));
