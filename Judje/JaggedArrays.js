const numbers = [1, 2, 33, 3, 4, 2, 4, 5, 5, 17];
const groups = [];
const groups1 = [];

// Group the numbers of an array, by remainder of 3
for (const number of numbers) {
    if (typeof groups[number % 3] === 'undefined') {
        groups[number % 3] = [];
    } else {
        groups[number % 3] = groups[number % 3];
    }
    groups[number % 3].push(number);
}
console.log(groups);


// Group the numbers of an array, by remainder of 4
for (const number of numbers) {
    if (typeof groups1[number % 4] === 'undefined') {
        groups1[number % 4] = [];
    } else {
        groups1[number % 4] = groups1[number % 4];
    }
    groups1[number % 4].push(number);
}
console.log(groups1);