// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .


function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((prev, curr) => prev + curr * arr.pop(), 0);
}