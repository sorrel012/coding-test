function solution(arr1, arr2) {
    return arr1.map((row, i) => {
        return row.map((num, j) => {
            return num + arr2[i][j];
        })
    })
}