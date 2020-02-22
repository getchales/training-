function longestRepitation(str) {
    let result = [];
    let f = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            f += str[i];
        }
        result.push(f);
        f = str[i + 1];
    }
    return findLongest(result)
}

function findLongest(arr) {
    let long = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > long.length) {
            long = arr[i]
        }
    }
    return long
}
console.log(longestRepitation("heeeellothere"));