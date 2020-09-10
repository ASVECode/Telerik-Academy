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
    'solve(["999999"])',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split('');
let number = '';

for (let i=0; i<input.length; i+=1) {
    if (isNaN(+input[i])) {
        continue;
    } else {
        number += input[i];
    }
}

number = number.split('').map(Number);

if(number.length > 15) {
const add = (arr) => {
    let lastNumber = arr[arr.length-1];
    lastNumber += 1;
    if (lastNumber > 9) {
        lastNumber = lastNumber.toString();
        lastNumber = +lastNumber[1];
        let numberBeforeLast = arr[arr.length-2];
        if (typeof numberBeforeLast === 'undefined') {
            numberBeforeLast = 1;
            arr.unshift(numberBeforeLast);
        } else {
        numberBeforeLast += 1;
        arr[arr.length-2] = numberBeforeLast;
        }
        
        if (numberBeforeLast > 9) {
            numberBeforeLast = numberBeforeLast.toString();
            numberBeforeLast = +numberBeforeLast[1];
            arr[arr.length-2] = numberBeforeLast;
            let numberBefore = arr[arr.length-3];
            if (typeof numberBefore === 'undefined') {
                numberBefore = 1;
                arr.unshift(numberBefore);
            } else {
                numberBefore += 1;
            arr[arr.length-3] = numberBefore;
            }

        }
    }
    arr[arr.length-1] = lastNumber;
    return arr;
}

for (let i=0; i<10; i+=1) {
    print(add(number).join(''));
}
} else {
    for (let i=1; i<=10; i+=1) {
        print(+number.join('')+i);
    }
}
