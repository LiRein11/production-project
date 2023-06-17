function filterRange(arr, a, b) {
    const c = arr.filter((el, i) => {
        if (el >= a && el <= b) {
            return el;
            console.log(el);
        }
    });
    console.log(c);
    return c;
}

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4);
