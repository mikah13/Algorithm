// If we list all the natural numbers below 10 that are
// multiples of 3 or 5, we get 3, 5, 6 and 9. The sum
// of these multiples is 23. Find the sum of all the
// multiples of 3 or 5 below 1000.

let multi = (a) => {
    let arr = [];
    let n = 3;
    let k = 5;
    for (let i = 1; n < a; i++) {
      n=3*i;
      k=5*i;
        if (n < a && n%5!==0) {
            arr.push(n);
        }
         if (k < a) {
            arr.push(k);
        }
    }
   return arr.reduce((cur, val) => cur + val);
}

multi(1000);
