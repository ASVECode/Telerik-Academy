const matrix = [
    [1, 2, 3, 4, 5],
    [6, 1, 7, 8, 9],
    [1, 2, 1, 3, 4],
    [5, 6, 7, 1, 8],
    [9, 1, 2, 3, 1],
];
let sum = 0;
let belowMain = 0;
let belowMainWithIt = 0;
let OverMain = 0;
let OverMainWithIt = 0;
let overSecondary = 0;
let overSecondaryWithIt = 0;
let belowSecondary = 0;
let belowSecondaryWithIt = 0;


for (let i=0; i<matrix.length; i+=1) {
    for (let j=0; j<matrix[i].length; j+=1) {
        sum += matrix[i][j];
    }
}
console.log(sum);

for (let i=0; i<matrix.length; i+=1) {
    for (let j=0; j<i; j+=1) {
        belowMain += matrix[i][j];
    }
}
console.log(belowMain);

for (let i=0; i<matrix.length; i+=1) {
    for (let j=0; j<=i; j+=1) {
        belowMainWithIt += matrix[i][j];
    }
}
console.log(belowMainWithIt);

for (let i=0; i<matrix.length; i+=1) {
    for (let j=matrix[i].length-1; j>i; j-=1) {
        OverMain += matrix[i][j];
    }
}
console.log(OverMain);

for (let i=0; i<matrix.length; i+=1) {
    for (let j=matrix[i].length-1; j>=i; j-=1) {
        OverMainWithIt += matrix[i][j];
    }
}
console.log(OverMainWithIt);

for (let i=matrix.length-1; i>=0; i-=1) {
    for (let j=0; j<matrix.length-i-1; j+=1) {
        overSecondary += matrix[i][j];
    }
}
console.log(overSecondary);

for (let i=matrix.length-1; i>=0; i-=1) {
    for (let j=0; j<=matrix.length-i-1; j+=1) {
        overSecondaryWithIt += matrix[i][j];
    }
}
console.log(overSecondaryWithIt);

for (let i=matrix.length-1; i>0; i-=1) {
    for (let j=matrix[i].length-1; j>=matrix[i].length-i; j-=1) {
        belowSecondary += matrix[i][j];
    }
}
console.log(belowSecondary);

for (let i=0; i<matrix.length; i+=1) {
    for (let j=matrix[i].length-1; j>=matrix[i].length-i-1; j-=1) {
        belowSecondaryWithIt += matrix[i][j];
    }
}
console.log(belowSecondaryWithIt);