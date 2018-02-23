let sameDigit = (a, b) => {
    return a.toString().split('').sort().join('') === b.toString().split('').sort().join('');
}
let found = false;
let i = 1;
while (!found) {
    if (sameDigit(2 * i, 3 * i) && sameDigit(3 * i, 4 * i) && sameDigit(4 * i, 5 * i) && sameDigit(5 * i, 6 * i)) {
        found = true;
    } else {
        i++;
    }
}
console.log(i);
