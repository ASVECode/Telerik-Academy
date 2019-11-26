
let input = [
    '3'

];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//code 


let output = '';
for (let i = 0; i <= 12; i++) {
let a ='';
switch (i) {
    case 0:
        a = '2';
        break;
    case 1:
        a = '3';
        break;
    case 2:
        a = '4';
        break;
    case 3:
        a = '5';
        break;
    case 4:
        a = '6';
        break;
    case 5:
        a = '7';
        break;
    case 6:
        a = '8';
        break;
    case 7:
        a = '9';
        break;
    case 8:
        a = '10';
        break;
    case 9:
        a = 'J';
        break;
    case 10:
        a = 'Q';
        break;
    case 11:
        a = 'K';
        break;
    case 12:
        a = 'A';
        break;
}



for (c = 0; c <= 3; c++) {
    switch (c) { 
        case 0:
            output += `${a} of Hearts, `;
            break;
        case 1:
            output += `${a} of Spades, `;
            break;
        case 2:
            output += `${a} of Clubs , `;
            break;
        case 3:
            output += `${a} of Diamonds`;
            break;
    }
}
print(output);
output = '';
}




