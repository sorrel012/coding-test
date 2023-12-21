function solution(numlist, n) {
    return numlist.map(value => [value, Math.abs(n - value)]).sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    }).map(v => v[0]);
}