const ages = [33, 12, 21, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const combined = ages
    .sort((a, b) => a - b)
    .map(a => a * 2)
    .filter(a => a > 50)
    .reduce((a, b) => a + b, 0)
console.log(combined)
