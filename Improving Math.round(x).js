// Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Math.round(198.499); // 198
// Math.round(200.5); // 201
// Math.round(1784.76); // 1785


Math.roundTo = function (number, precision) {
    return +(number.toFixed(precision));
}