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
};

let getPrimeSet = a => {
    let arr = [];
    for (let i = 3; i <= a; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
};

let checkSquare = a => {
    let primeSet = getPrimeSet(a);
    let possibleSquares = primeSet.map(x => Math.sqrt((a - x) / 2));
    for (let i = 0; i < possibleSquares.length; i++) {
        if (possibleSquares[i] === parseInt(possibleSquares[i])) {
            return true;
        }
    }
    return false;
};

let i = 5;
while (checkSquare(i)) {
    i += 2;
}
console.log(i);
