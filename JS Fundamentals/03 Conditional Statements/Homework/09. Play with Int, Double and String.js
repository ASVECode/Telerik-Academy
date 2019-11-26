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
  'hello'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

//print("Play with Int, Double And String");
print("Please choose a type:");
print("1 --> int");
print("2 --> double");
print("3 --> string");

let choice = gets();
let input = gets();

switch (choice) {
  case 1 :
      print("Please enter an int: " + input);
      print(Number(input) + 1);
      break;
  case 2 :
      print("Please enter a double: " + input);
      print(Number(input + 1));
      break;
  case 3 :
      print("Please enter a string: "+ input);
      print(input + "*");
      break;
  default:
      print("End of the program!");
      break;
}