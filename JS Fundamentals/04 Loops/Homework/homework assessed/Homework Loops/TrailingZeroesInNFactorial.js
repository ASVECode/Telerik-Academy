function rFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}



let n = 20;
let calculateFactorial = (rFact(n)).toString();

for(i = 0; i < calculateFactorial.length; i++){
    if(calculateFactorial.charAt(i) === '0')
    countOfZeroes ++
    if(calculateFactorial.charAt(i) !== '0'){
        countOfZeroes = 0;
    }
}
console.log(countOfZeroes);

