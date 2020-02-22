function primeNumber(arr) {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i]) && arr[i] > 4) {
            primes.push(arr[i])
        }
    }
    return primes;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNumber([1, 2, 3, 4, 5, 6, 7]));


