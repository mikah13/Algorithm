pushAndShift = (a, b) => a.push(b.shift());

merge = (a, b) => {
    let k = [];
    while (a.length && b.length) {
        pushAndShift(k, a[0] > b[0]?b:a);
    }
    while (a.length) {
        pushAndShift(k, a);
    }
    while (b.length) {
        pushAndShift(k, b);
    }
    return k;
};

mergeSort = a => {
    let middle = parseInt(a.length / 2);
    if (a.length === 1)
        return a;
    let x = mergeSort(a.slice(0, middle)); // left
    let y = mergeSort(a.slice(middle, a.length)); // right
    return merge(x, y);
};
