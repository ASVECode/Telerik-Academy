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
  '1','2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let x = Number(gets());
let y = Number(gets());

if(x>0 && y>0){
    print(1);
}else if(x>0 && y<0){
    print(4);
}else if(x<0 && y>0){
    print(2)
}else if(x<0 && y<0){
    print(3)
}else if(y==0 && x!=0){
    print(6)
}else if(x==0 && y!=0){
    print(5)
}else{
    print(0)
}
