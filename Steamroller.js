// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);