
let input = [

    '5'

    ];
    

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let n = +gets();


for (rows = 0; rows <  n; rows++){
    let str = '';  

    for (col = rows +1; col <= rows+n; col++) {      
        
        str += ' ' + col;
              
    } 
       //str += '\n';
    
    print (str);
}
