function solution(arr, queries) {
    for(let [s, e] of queries) {
        for(let i = s; i < e + 1; i++) {
            arr[i] += 1;
        }
    }
    return arr;
}