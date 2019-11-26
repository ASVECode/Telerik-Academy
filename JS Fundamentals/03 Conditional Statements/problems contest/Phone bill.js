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
    10,
    61
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let messages = +gets();
let minutes = +gets();


// let extraMessages = (messages - 20);
// let extraMinutes = (minutes - 60);
// let paidExtraMessages = extraMessages * 0.06;
// let paidExtraMinutes = extraMinutes * 0.10;
// let paidTaxies = paidExtraMinutes * 0.2 + paidExtraMessages * 0.2;
// let regularBill = 12
// let extraBill = regularBill + paidExtraMessages + paidExtraMinutes + paidTaxies;



// if (messages > 20) {
//     print(`${extraMessages} additional messages for ${paidExtraMessages.toFixed(2)} levas`);
// } else {
//     print('0 additional messages for 0.00 levas');

// } if (minutes > 60) {
//     print(`${extraMinutes} additional minutes for ${paidExtraMinutes.toFixed(2)} levas`);
// } else {
//     print(`0 additional minutes for 0.00 levas`);
// }

// if (minutes > 60 && extraMinutes >= 0) {
//     print(`${paidTaxies.toFixed(2)} additional taxes`);
//     print(`${extraBill.toFixed(2)} total bill`);
// } else if ((messages > 20 && extraMessages >= 0)) {
//     print(`${paidTaxies.toFixed(2)} additional taxes`);
//     print(`${extraBill.toFixed(2)} total bill`);
// } else {
//     print(`0.00 additional taxes`);
//     print(`${regularBill} total bill`);
// }

let extraMessages = (messages - 20);
let extraMinutes = (minutes - 60);
let paidExtraMessages = extraMessages * 0.06;
let paidExtraMinutes = extraMinutes * 0.10;
let paidTaxies = paidExtraMinutes * 0.2 + paidExtraMessages * 0.2;
let regularBill = 12
let extraBill = regularBill + paidExtraMessages + paidExtraMinutes + paidTaxies;

if (extraMessages < 0){
    extraMessages = 0;
}
if (extraMinutes <0){
    extraMinutes = 0;

if (messages > 20) {
    print(`${messages-20} additional messages for ${((messages-20)*0.06.toFixed(2))} levas`);
} else {
    print('0 additional messages for 0.00 levas');

} if (minutes > 60) {
    print(`${minutes-60} additional minutes for ${((minutes-60)*0.10).toFixed(2)} levas`);
} else {
    print(`0 additional minutes for 0.00 levas`);
}

if (minutes > 60 && (minutes-60) >= 0) {
    print(`${paidTaxies.toFixed(2)} additional taxes`);
    print(`${extraBill.toFixed(2)} total bill`);
} else if ((messages > 20 && extraMessages >= 0)) {
    print(`${paidTaxies.toFixed(2)} additional taxes`);
    print(`${extraBill.toFixed(2)} total bill`);
} else {
    print(`0.00 additional taxes`);
    print(`${regularBill} total bill`);
}

// let extraMinuteCost = 0.10 * 1.2;
// let extraMessageCost = 0.06 * 1.2;
// let extraMinutes = minutes - 60;
// let extraMessages = messages - 20;
// let totalCost = 12.0;
// let extraTaxes = ((extraMessages) * 0.06 + (extraMinutes) * 0.1) / 5;
//     if (messages > 20) {
//         totalCost += (messages - 20) * extraMessageCost;
//     }
//     if (minutes > 60) {
//         totalCost += (minutes - 60) * extraMinuteCost;
//     }
//     if (extraMessages < 0){
//         extraMessages = 0;
//     }
//     if (extraMinutes <0){
//         extraMinutes = 0;
//     }
//     if (additionalTaxes<0) {
//         additionalTaxes = 0;