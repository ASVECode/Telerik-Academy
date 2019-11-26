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
    4
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = gets();

if(n>=1 && n<=20){

    let total = n * n;
    let result = [];

    for (let i = 0; i < n; i++) {
        let rs = [];
        for (let j = 0; j < n; j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    let x = 0;
    let y = 0;
    let step = 0;
    for (let i = 0; i < total;) {
        while (y + step < n) {
            i++;
            result[x][y] = i;
            y++;

        }
        y--;
        x++;

        while (x + step < n) {
            i++;
            result[x][y] = i;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            i++;
            result[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            i++;
            result[x][y] = i;
            x--;
        }
        x++;
        y++;

    }

    for (row of result) {
        print(row.join(' '));
    }
}else{
    print('number is bigger then 20');
}