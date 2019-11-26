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
    'June', 24
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let month = gets();
let date = +gets();

switch (month) {
    case "March":
        if (date >= 1 && date <= 20) {
            print('Winter');
        } else if (date > 20 && date <= 31) {
            print("Spring");
        }
        break;

    case "April":
        print("Spring");
        break;

    case "May":
        print("Spring");
        break;

    case "June":
        if (date >= 1 && date <= 20) {
            print('Spring');
        } else if (date > 20 && date <= 31) {
            print("Summer");
        }
        break;

    case "July":
        print("Summer");
        break;

    case "August":
        print("Summer");
        break;
    case "September":
        if (date >= 1 && date <= 21) {
            print("Summer");
        } else if (date >= 22 && date <= 30) {
            print("Autumn");
        }
        break;
    case "October":
        print("Autumn");
        break;
    case "November":
        print("Autumn");
        break;
    case "December":
        if (date >= 1 && date <= 20) {
            print("Autumn");
        } else if (date >= 21 && date <= 31) {
            print("Winter");
        }
        break;
    case "January":
        print("Winter");
        break;
    case "February":
        print("Winter");
        break;
}