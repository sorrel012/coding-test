function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((_, col) => row.reduce((acc, curr , i) => acc + curr * arr2[i][col], 0)))
}