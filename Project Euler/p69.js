let relPrime = (a, b) => {
    if (a === 1)
        return true;
    if (b % a === 0)
        return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0 && b % i === 0) {
            return false;
        }
    }
    return true;
}

let genArr = a => {
    return new Array(a - 1).fill('').map((i, j) => j + 1);
}

let totient = a => {
    return genArr(a).filter(i => relPrime(i, a)).length;
}

let res = 0;
for (let i = 2; i < 1000; i++) {
    if (res < totient(i)) {
        res = totient(i);
    }
}
res
