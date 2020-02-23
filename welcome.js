function rev(str) {
    str = str.split(" ");
    let s = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = str[i].length - 1; j >= 0; j--) {
            s += str[i][j];
        }
        s += ' ';
    }
    return s;

}
console.log(rev('Welcome to home'));//emocleW ot emoh 