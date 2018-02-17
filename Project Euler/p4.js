let isPalindrome = a => {
    return a.toString() === a.toString().split('').reverse().join('');
}

let prodOf3digits = a => {
    for (let i = 100; i <= Math.sqrt(a); i++) {
        if (a % i === 0 && a / i >= 100 && a / i <= 999) {
            return true;
        }
    }
    return false;
}

let findLargest3digitsPalindrom = _ => {
    for (let i = 998001; i >= 10000; i--) {
        if (prodOf3digits(i) && isPalindrome(i)) {
            return i;
        }
    }
    return 0;
}
findLargest3digitsPalindrom();
