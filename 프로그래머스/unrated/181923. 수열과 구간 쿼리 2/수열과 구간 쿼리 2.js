function solution(arr, queries) {
    return queries.map(([s, e, k], i) => {
        let tmp = arr.slice(s, e+1).filter(num => num > k)
        return tmp.length === 0 ? -1 : tmp.reduce((min, n) => {
            return min < n ? min : n;
        })
    })
}