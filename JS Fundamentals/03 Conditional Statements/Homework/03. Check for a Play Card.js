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
  '5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let cards = gets();

switch (cards) {
  case '2':
    print('yes'); break;
  case '3':
    print('yes'); break;
  case '4':
    print('yes'); break;
  case '5':
    print('yes'); break;
  case '6':
    print('yes'); break;
  case '7':
    print('yes'); break;
  case '8':
    print('yes'); break;
  case '9':
    print('yes'); break;
  case '10':
    print('yes'); break;
  case 'J':
    print('yes'); break;
  case 'Q':
    print('yes'); break;
  case 'K':
    print('yes'); break;
  case 'A':
    print('yes'); break;
  default:
    print('no')
}
