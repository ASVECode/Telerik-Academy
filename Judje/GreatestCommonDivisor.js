/*
Write a program that calculates the
greatest common divisor (GCD) of given two
integers A and B.
Use the Euclidean algorithm
*/

const gcd = (a, b) => {
    if ((a % b) === 0) {
           return b;
    }
           return gcd(b, a % b);
};

console.log(gcd(500, 225));
