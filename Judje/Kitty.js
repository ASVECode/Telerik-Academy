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
    '@*@*@*xxx',
    '1 -1 1 -1 2 1 1 1 1 1 1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const pattern = gets().split('');
const moves = gets().split(' ').map(Number);
let indexInMoves = 0;
let startIndex = 0;
let coderSouls = 0;
let food = 0;
let deadlock = 0;
let jumps = 0;
let dead = false;
while (indexInMoves < moves.length + 1) {
    if (pattern[startIndex] === '@') {
        coderSouls += 1;
        pattern[startIndex] = '_';
    } else if (pattern[startIndex] === '*') {
        food += 1;
        pattern[startIndex] = '_';
    } else if (pattern[startIndex] === 'x') {
        deadlock += 1;
        if (startIndex % 2 === 0) {
            coderSouls -= 1;
            if (coderSouls < 0) {
                dead = true;
                break;
            }
            pattern[startIndex] = '@';
        } else if (startIndex % 2 !== 0) {
            food -= 1;
            if (food < 0) {
                dead = true;
                break;
            }
            pattern[startIndex] = '*';
        }
    } else {
        startIndex += moves[indexInMoves];
        if (startIndex > pattern.length) {
            startIndex %= pattern.length;
        } else if (startIndex < 0) {
            startIndex = pattern.length;
            startIndex += moves[indexInMoves];
        }
        indexInMoves++;
        jumps++;
        continue;
    }
    startIndex += moves[indexInMoves];

    if (startIndex > pattern.length) {
        startIndex %= pattern.length;
    } else if (startIndex < 0) {
        startIndex = pattern.length;
        startIndex += moves[indexInMoves];
    }
    indexInMoves++;
    jumps++;
}

if (dead) {
    print(`You are deadlocked, you greedy kitty!
    Jumps before deadlock: ${jumps}`);
} else {
    print(`Coder souls collected: ${coderSouls}
    Food collected: ${food}
    Deadlocks: ${deadlock}`);
}