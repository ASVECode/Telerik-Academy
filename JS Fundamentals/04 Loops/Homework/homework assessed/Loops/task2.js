const getGets = (arr) => {
    let index = 0;
 
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
 
    '3'
];

 
const gets = this.gets || getGets(test);
const print = this.print || console.log;


let num = +gets();

let str = '';


for(var n = 1; n <= num; n ++) {

    if ( (n%3 !== 0) && (n%7 !== 0)) {

        str += n + ' ';

    } 
}


str += '';

print (str);
