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
     999

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = +gets();
let numberStr = number.toString();

let hundreds;
let tens;
let ones;

let strSplit = numberStr.split('');
let first = strSplit[0];
let second = strSplit[1];
let third = strSplit[2];
let length = numberStr.length;

ones = Number(first);


if (length > 1) {
    let second = strSplit[1];
    ones = Number(second);
    tens = Number(first);
}
if (length > 2) {
    let third = strSplit[2];
    ones = Number(third);
    tens = Number(second);
    hundreds = Number(first);
}

let answer;

if (number == 0) {
    answer = 'Zero';
}

if (length > 0 || tens > 1) {

    switch (ones) {
        case 1: {
            answer = 'one';
            break;
        }
        case 2: {
            answer = 'two';
            break;
        }
        case 3: {
            answer = 'three';
            break;
        }
        case 4: {
            answer = 'four';
            break;
        }
        case 5: {
            answer = 'five';
            break;
        }
        case 6: {
            answer = 'six';
            break;
        }
        case 7: {
            answer = 'seven';
            break;
        }
        case 8: {
            answer = 'eight';
            break;
        }
        case 9: {
            answer = 'nine';
            break;
        }
    }

}

if (length > 1) {
    if (tens < 2) {
        if (ones == 0) {
            answer = 'ten';
        } else if (ones == 1) {
            answer = 'eleven';
        } else if (ones == 2) {
            answer = 'twelve';
        } else if (ones == 3) {
            answer = 'thirteen';
        } else if (ones == 4) {
            answer = 'fourteen';
        } else if (ones == 5) {
            answer = 'fifteen';
        } else if (ones == 6) {
            answer = 'sixteen';
        } else if (ones == 7) {
            answer = 'seventeen';
        } else if (ones == 8) {
            answer = 'eighteen';
        } else if (ones == 9) {
            answer = 'nineteen';
        }
    } else {
        if (tens == 2 && ones == 0) {
            answer = 'twenty';
        } else if (tens == 3 && ones == 0) {
            answer = 'thirty';
        } else if (tens == 4 && ones == 0) {
            answer = 'fourty';
        } else if (tens == 5 && ones == 0) {
            answer = 'fifty';
        } else if (tens == 6 && ones == 0) {
            answer = 'sixty';
        } else if (tens == 7 && ones == 0) {
            answer = 'seventy';
        } else if (tens == 8 && ones == 0) {
            answer = 'eighty';
        } else if (tens == 9 && ones == 0) {
            answer = 'ninety';
        }
    }

    if (tens == 2 && ones > 0) {

        answer = "twenty " + answer

    } else if (tens == 3 && ones > 0) {
        answer = "thirty" + answer

    } else if (tens == 4 && ones > 0) {
        answer = "fourty " + answer

    } else if (tens == 5 && ones > 0) {
        answer = "fifty " + answer

    } else if (tens == 6 && ones > 0) {
        answer = "sixty " + answer

    } else if (tens == 7 && ones > 0) {
        answer = "seventy " + answer

    } else if (tens == 8 && ones > 0) {
        answer = "eighty " + answer

    } else if (tens == 9 && ones > 0) {
        answer = "ninety " + answer

    }

}

if (length > 2) {
    if (hundreds == 1 && tens == 0 && ones == 0) {
        answer = 'One hundred';
    } else if (hundreds == 2 && tens == 0 && ones == 0) {
        answer = 'Two hundred';
    } else if (hundreds == 3 && tens == 0 && ones == 0) {
        answer = 'Three hundred';
    } else if (hundreds == 4 && tens == 0 && ones == 0) {
        answer = 'Four hundred';
    } else if (hundreds == 5 && tens == 0 && ones == 0) {
        answer = 'Five hundred';
    } else if (hundreds == 6 && tens == 0 && ones == 0) {
        answer = 'Six hundred';
    } else if (hundreds == 7 && tens == 0 && ones == 0) {
        answer = 'Seven hundred';
    } else if (hundreds == 8 && tens == 0 && ones == 0) {
        answer = 'Eight hundred';
    } else if (hundreds == 9 && tens == 0 && ones == 0) {
        answer = 'Nine hundred';
    }
}

if (hundreds == 1 && tens > 0) {
    answer = "One hundred and " + answer

} else if (hundreds == 2 && tens > 0) {
    answer = "Two hundred and " + answer

} else if (hundreds == 3 && tens > 0) {
    answer = "Three hundred and " + answer

} else if (hundreds == 4 && tens > 0) {
    answer = "Four hundred and " + answer

} else if (hundreds == 5 && tens > 0) {
    answer = "Five hundred and " + answer

} else if (hundreds == 6 && tens > 0) {
    answer = "Six hundred and " + answer

} else if (hundreds == 7 && tens > 0) {
    answer = "Seven hundred and " + answer

} else if (hundreds == 8 && tens > 0) {
    answer = "Eight hundred and " + answer

} else if (hundreds == 9 && tens > 0) {
    answer = "Nine hundred and " + answer

}

if (number < 0 || number > 999) {
    answer = 'Not valid number';
}

print(answer.charAt(0).toUpperCase() + answer.slice(1));