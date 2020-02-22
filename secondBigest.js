function secondBigest(arr) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second;

}
console.log(secondBigest([3, 2, 1, 7, 6]))