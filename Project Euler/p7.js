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

let get10001stPrime = _ => {
    let arr = [];
    let i = 2;
    while (arr.length != 10001) {
        if (isPrime(i)) {
            arr.push(i);
        }
        i++;
    }
    return arr[arr.length - 1];
}

get10001stPrime();
