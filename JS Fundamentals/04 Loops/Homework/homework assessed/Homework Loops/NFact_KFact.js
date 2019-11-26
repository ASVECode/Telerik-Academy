function rFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}

// Enter k < n
let n = 8;
let k = 3;

let factorial = rFact(n) / rFact(k);
if(n > k){
    console.log(factorial);
}else {
    console.log('Enter N > K');
}

