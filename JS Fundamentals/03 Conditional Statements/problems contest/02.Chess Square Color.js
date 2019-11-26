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
    'f', 3
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let label = gets();
let rank = +gets();

if( label == 'a' || label == 'c' || label == 'e'|| label == 'g'){
    if (rank%2) {
        print('dark');
    }else{
        print('light');
    }

}else{
    if (rank%2){
        print('light');
    }else{
        print('dark');
    }
}