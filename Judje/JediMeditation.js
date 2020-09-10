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
    3,
    'M1 K1 P1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const jediForMeditaion = gets().split(' ');

const jediMaster = [];
const jediKnight = [];
const jediPadawan = [];
for (let i = 0; i < n; i++) {
    const currentJedi = jediForMeditaion[i][0];
    if (currentJedi === 'M') {
        jediMaster.push(jediForMeditaion[i]);
    } else if (currentJedi === 'K') {
        jediKnight.push(jediForMeditaion[i]);
    } else {
        jediPadawan.push(jediForMeditaion[i]);
    }
}
const currHolder = jediMaster.concat(jediKnight);
const holder = currHolder.concat(jediPadawan);
print(holder.join(' '));