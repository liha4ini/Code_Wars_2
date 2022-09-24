// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.


const drawStairs = n => [...Array(n)].map((_, index) => ' '.repeat(index) + 'I').join('\n');