const getGets = (arr) => {
    let index = 0;
 
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
 
    '10'
];

 
const gets = this.gets || getGets(test);
const print = this.print || console.log;


let num = +gets();
let n = 1;
let str = '';

while (n <= num ) { 
      
str +=  n + ' ';

n++;
} 

str +=  '';
print(str);



// for(var n = 1; n <= num; n ++) {

//     str += n + " ";
// }

// str += '';

// print (str);

//

// let n = +gets();
// let output = '';

// for (i = 1; i <= n; i++) {
//     output += `${i} `;
// }
// print(output.trim());