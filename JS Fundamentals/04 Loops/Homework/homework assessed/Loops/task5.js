
let input = [

    '5',
    '-4'

    ];
    

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//code 


let n = +gets()
    
let x = +gets();
let result = 1;

    for (let i = 1; i <= n; i++){
        let ifac = 1;

        for (let j = i; j >= 1; j--){
        ifac *= j;
        }
        result += (ifac) / (x ** i);
    }
    print(result.toFixed(5));

    