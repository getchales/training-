function grade(arr, key) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let total = 0;
        for (let j = 0; j < key.length; j++) {
            if (arr[i].answer[j] === key[j]) {
                total += 10;
            } else if (arr[i].answer[j] !== key[j]) {
                total -= 5;
            } else {
                total += 0;
            }
        }
        result.push(`${arr[i].name}, ${gradeHelper(total)}`);
    }
    return result;
}

function gradeHelper(total) {
    if (total >= 50) {
        g = "A";
    } else if (total >= 40) {
        g = "B";
    } else {
        g = "C";
    }
    return g;
}
console.log(grade([{ name: "Getaneh", answer: ["a", "b", "c", "d", "e"] }], ["a", "b", "c", "d", "e"]));
