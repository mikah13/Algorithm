// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

let isPrime = a => {
    if (a < 2) {
        return false;
    } else if (a == 2) {
        return true;
    } else {
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                return false;
            }
        }
    }
    return true;
}

let largestPrimeFactor = a => {
    let prime = -1;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        prime = a % i === 0 && isPrime(i)
            ? i
            : prime;
    }
    return prime;
}
