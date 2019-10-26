let sumDeposited = +gets();
let firstYear = sumDeposited + sumDeposited * 0.05;
let secondYear = firstYear + firstYear * 0.05;
let thirdYear = secondYear + secondYear * 0.05;

print(firstYear.toFixed(2));
print(secondYear.toFixed(2));
print(thirdYear.toFixed(2));


