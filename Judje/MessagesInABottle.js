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
    // test1
    '1122',
    'A1B12C11D2',

    // test2
    // '778',
    // 'Z123A7787X666Y234',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const decode = (numbersMessage, decoded, map, decodeMessage) => {
    if (numbersMessage.length === 0) {
        decodeMessage.push(decoded);
    }

      for (const key in map){
        const letterCipher = map[key];
        if (numbersMessage.startsWith(letterCipher)) {
            const newNumbersMessage = numbersMessage.substring(letterCipher.length);
            decode(newNumbersMessage, decoded+key, map, decodeMessage);
        }
    }
};

const decoded = '';
const decodeMessage = [];
const numbersMessage = gets();
const cipher = gets().split('');
const map = {};

for (let i = 0; i < cipher.length; i += 1) {
    let j = i + 1;
    let number = '';
    let letter;
    if (isNaN(+cipher[i])) {
        letter = cipher[i];
    } else {
        continue;
    }
    while (true) {
        if (isNaN(+cipher[j])) {
            break;
        }
        number += cipher[j];
        j += 1;
    }

    map[letter] = number;
}

decode(numbersMessage, decoded, map, decodeMessage);

print(decodeMessage.length);
decodeMessage.sort().forEach((m) => (print(m)));
