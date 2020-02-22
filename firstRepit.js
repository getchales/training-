function firstRepit(str) {
    let result = [];
    for (let i = 0; i < str.length - 1; i++) {
        result = []
        for (let j = i; j < str.length; j++) {
            if (str[i] === str[j]) {
                result.push(str[i]);
            }
        }
    }
    return result;
}
console.log(firstRepit("Heeeeeellllllo"))
