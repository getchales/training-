function oneTwoOne(arr) {
    let first = [];
    let last = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            first.push(arr[i]);
        } else {
            break;
        }
    }
    console.log(first)

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 1) {
            last.push(arr[i]);
        } else {
            break;
        }
    }
    console.log(last)
    if (first.length === last.length) {
        return true;
    } else {
        return false;
    }
}
console.log(oneTwoOne([1, 1, 1, 2, 2, 2, 1, 1, 1]));