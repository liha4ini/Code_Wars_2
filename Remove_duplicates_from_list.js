// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


// Solution 1 ======================================

const distinct = (a) => [...new Set(a)];


// Solution 2 ======================================

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});

console.log(uniqueChars);