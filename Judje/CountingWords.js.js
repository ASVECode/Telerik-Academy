const text = 'I am hungry! Hungry i am, am i hungry!';
const splited = text.split(/[ !,]/).filter((x) => x);
const words = {};

for (const word of splited) {
    if (words[word] === undefined) {
        words[word] = 0;
    }
    words[word] += 1;
}

console.log(words);