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
    'A'
    
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let card = gets();
let number = 0;

switch (card) {
    case 'J': number = 11; break;
    case 'Q': number = 12; break;
    case 'K': number = 13; break;
    case 'A': number = 14; break;
    default: number = card; break;
}

for (let i = 2; i <= number; i++) {
    let str = '';
    switch (i) {
        case 11: str = 'J'; break;
        case 12: str = 'Q'; break;
        case 13: str = 'K'; break;
        case 14: str = 'A'; break;
        default: str = i; break;
    }
    print(`${str} of spades, ${str} of clubs, ${str} of hearts, ${str} of diamonds`);
}