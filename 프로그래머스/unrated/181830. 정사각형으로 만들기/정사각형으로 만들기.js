function solution(arr) {
    let n = Math.max(arr.length, arr[0].length);
    for (let row of arr) {
        while (row.length < n) {
            row.push(0)
        };
    }
    while (arr.length < n) {
        arr.push(Array(n).fill(0));
    }
    
    return arr;
}