const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '0 15 30'
    
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let degrees = gets().split(' ');
 
for (let i = 0; i < degrees.length; i++) {
  degrees[i] = degrees[i] * 1.8 + 32
}
 
degrees.forEach(function (degree, i) {
  print(degree)
})

// let tC = gets().split(' ');

// for (let i = 0; i < tC.length; i++) {
//     console.log(tC.charAt(i));
// }



// for(let i =1; i<=numberCount; i++){
//     let price = +gets();
//     priceD = price*(1-0.65);
//     print((Math.round((priceD + 0.00001) * 100) / 100).toFixed(2));
// }