let C = (n, r) => {
    let res = 1;
    for (let i = n - r + 1; i <= n; i++) {
        res *= i;
    }
    for (let i = 1; i <= r; i++) {
        res /= i;
    }
    return res;
}

let count = 0;
for (let i = 23; i <= 100; i++) {
    for (let k = 1; k <= i; k++) {
        if (C(i, k) > 1000000) {
            count++;
        }
    }
}
