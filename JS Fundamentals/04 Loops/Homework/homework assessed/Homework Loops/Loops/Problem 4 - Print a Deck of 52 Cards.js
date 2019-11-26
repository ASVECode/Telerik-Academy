const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [`J`];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// loop through the whole deck 2 to A
for (let card = 2; card <= 14; card++) {
    let line = '';
    let cardName = card;
    switch (cardName) { // when the face of the card is a string
        case 11:
            cardName = `J`;
            break;
        case 12:
            cardName = `Q`;
            break;
        case 13:
            cardName = `K`;
            break;
        case 14:
            cardName = `A`;
    }
    // run this in case we print the symbol of the suit :
    // for (let type = 03; type <= 06; type++) {
    //     line += cardName + ` of ` + String.fromCharCode(type) + `, `;
    //     if (type === 06) {
    //         line += cardName + ` of ` + String.fromCharCode(type);
    //     }
    // else we print it with text :
    for (let type = 1; type <= 4; type++) {
        switch (type) {
            case 1:
                line += cardName + ` of spades, `;
                break;
            case 2:
                line += cardName + ` of clubs, `;
                break;
            case 3:
                line += cardName + ` of hearts, `;
                break;
            default:
                line += cardName + ` of diamonds`;
        }
    }
    print(line);
}