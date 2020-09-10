const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = ['1',
    '7'];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numJury = Number(gets());
let votes = [];
let missCat = '';
let higestVote = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < numJury; i++) {
    votes.push(gets());
}
votes = votes.sort(function (a, b) { return a - b })
let curCount = 1;

for (let i = 0; i < votes.length; i++) {
    let curVote = votes[i];
    if (curVote == votes[i + 1]) {
        curCount++;
    } else {
        curCount = 1;
    }
    if (curCount > higestVote) {
        higestVote = curCount;
        missCat = curVote;
    }
}
print(missCat)



