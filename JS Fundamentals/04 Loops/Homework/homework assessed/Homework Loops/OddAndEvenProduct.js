let input = '2 1 1 6 3';
let numbers = input.split(' ');
let oddProduct = 1;
let evenProduct = 1;


for (i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        oddProduct = oddProduct * numbers[i];
    } else {
        evenProduct = evenProduct * numbers[i];
    }
    
}

if (oddProduct === evenProduct) {
    console.log('yes');
} else {
    console.log('no');
}

