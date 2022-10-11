// If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

// function sum1_10(){
//   return 1+2+3+4+5+6+7+8+9+10;
// }


const padIt = (str, n) => '*'.repeat((n + 1) / 2) + str + '*'.repeat(n / 2);