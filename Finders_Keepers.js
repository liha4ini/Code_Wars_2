// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.


function findElement(arr, func) {
    if (arr.length > 0 && !func(arr[0])) {
     return findElement(arr.slice(1), func);
    } else {
     return arr[0];
    }
}
 
findElement([1, 2, 3, 4], num => num % 2 === 0);