function solution(arr, queries) {
    queries.forEach(([i, j]) => {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    })
    return arr;
}