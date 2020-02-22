function longestRepitation(str) {
    str = str.split("");
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        let cout = 0;
        let result = [];
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                cout += 1;
                result.push(str[i])
            }
        }
        if (cout > max) {

            max = cout;
            result2 = result.join("");

        }

    }
    return result2;
}
console.log(longestRepitation("therearecorrect"));