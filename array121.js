function array121(arr) {
    if (arr[0] !== 1 || arr[arr.length - 1] !== 1) {
        return false;
    }
    let found2 = false;
    let first = 0;
    let last = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && !found2) {
            first++;
        } else if (arr[i] !== 2 || arr[i] !== 1) {
            return false;
        } else if (arr[i] === 2) {
            if (last > 0) {
                return false;
            } else {
                found2 = true;
            }
        } else {
            last++;
        }
    }
    return first === last;
}
console.log(array121([1, 1, 2, 2, 1, 1]))