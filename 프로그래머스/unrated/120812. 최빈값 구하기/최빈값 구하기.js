function solution(array) {
    let arr = new Array(1000).fill(0);
    array.forEach((v, i) => {
        arr[v]++;
    })
    const max = Math.max(...arr);
    return arr.filter(v => v === max).length > 1 ? -1 : arr.indexOf(max);
}
