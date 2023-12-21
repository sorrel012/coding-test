function solution(arr, query) {
    return query.reduce((newArr, v, i) => {
        return i % 2 === 0 ? newArr.slice(0, v+1) : newArr.slice(v);
    }, arr);
}