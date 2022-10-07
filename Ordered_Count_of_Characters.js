// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]



function orderedCount(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      for (let j = 0; j < result.length; j++) {
        if (result[j][0] === str[i]) {
          count++;
        }
      }
      if (count === 0) {
        for (let j = i; j < str.length; j++) {
          if (str[j] === str[i]) {
            count++;
          }
        }
        result.push([str[i], count]);
      }
    }
    return result;
}