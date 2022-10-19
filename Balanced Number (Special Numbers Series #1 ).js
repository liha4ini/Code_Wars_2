// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.


function balancedNum(n) {
    let s = String(n);
    let res = 0;
    for (let i = 0; i < s.length / 2 - 1; i++) {
        res += Number(s[i] - Number(s[s.length - 1 - i]))
    }
    return res == 0 ? "Balanced" : "Not Balanced";
}