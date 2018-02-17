let sum = (a, b) => {
    return (b + a) * (b - a + 1) / 2;
};
let sumOfSquare = (a, b) => {
    let arr = new Array(b - a + 1).fill(null).map((i, j) => a + j).reduce((cur, val) => cur + val * val);
    return arr;
};
sum(1, 100) * sum(1, 100) - sumOfSquare(1, 100);
