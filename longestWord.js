function longestWord(sentence) {
    sentence = sentence.split(" ");
    let longest = sentence[0];
    for (let i = 0; i < sentence.length; i++) {
        if (longest.length < sentence[i].length) {
            longest = sentence[i];
        }
    }
    return longest;
}
console.log(longestWord("hell there how are you?"));