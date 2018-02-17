let powerfulDigitCounts = _ => {
    let i = 1;
    let count = 0;
    while (Math.pow(9, i).toString().length >= i) {
        for (let j = 9; j >= 1; j--) {
            if (Math.pow(j, i).toString().length === i) {
                count++;
            }
        }
        i++;
    }
    console.log(count);
}
powerfulDigitCounts();
