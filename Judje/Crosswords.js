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
    '4 4',
    'luka',
    'o#a#',
    'kula',
    'i#a#'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let dimensions = gets().split(' ');
let n = +(dimensions[0]);
let m = +(dimensions[1]);
let vertical = [];
let result = [];
for (let i = 0; i < n; i++) {
    let horizontal = "";//На всеки ред ще започваме хоризонталата от празен стринг
    let line = gets();//Прочитаме съответния ред
    for (let j = 0; j < m; j++) {//Обхождаме прочетения ред
        if (line[j] != '#') {//Ако е буква я записваме

            horizontal += line[j];
            vertical[j] += line[j];
        }
        else {

            vertical[j] = '1';
            horizontal = '';
        }

    }

}
for (let i = 0; i < vertical.length; i++) {
    if (vertical[i] != Number(vertical[i])) {
        result.push(vertical[i])
    }
    print(vertical[i].charCodeAt())
}
//print(result)
