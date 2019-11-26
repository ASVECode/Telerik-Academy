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
    '02:59 AM '
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let inputTime = gets();
let splitTime = inputTime.split(':');
let hh = splitTime[0]
let splitMinutes = splitTime[1]
let splitMm = splitMinutes.split(' ');
let mm = splitMm[0]
let tt = splitMm[1]

let invalid = "invalid time";

if (hh < 1 || hh > 12) {
    print(invalid);
}
if (mm < 0 || mm > 59) {
    print(invalid);
}
if (tt != "AM" && tt != "PM") {
    print(invalid);
}

if (hh >= 1 && hh <= 12) {
    if (mm >= 0 && mm <= 59) {
        if (tt == "AM" || tt == "PM") {
            if (tt == "AM" && hh >= 0 && hh < 3) {
                print("beer time");
            }
            if (tt == "PM" && hh >= 1 && hh <= 12) {
                print("beer time");
            }
            if ((tt == "AM" && hh >= 3 && hh <= 12) || (tt == "PM" && hh == 0)) {
                print("non-beer time");
            }
        }
    }
}