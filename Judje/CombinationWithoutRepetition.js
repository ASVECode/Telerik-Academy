const generateCombinationWithoutRep = (n, k, index, combination) => {
    if (index === k) {
        console.log(combination.join(' '));
        return;
    }
    const start = index ? combination[index-1] + 1 : 1;
    for (let i=start; i<=n; i+=1) {
        combination[index] = i;
        generateCombinationWithoutRep(n, k, index+1, combination);
    }
};
const line = '4 3';
const n = line.split(' ').map(Number)[0];
const k = line.split(' ').map(Number)[1];
const combination = Array.from({ length: k });

generateCombinationWithoutRep(n, k, 0, combination);
