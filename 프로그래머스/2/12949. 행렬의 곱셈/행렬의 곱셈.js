function solution(arr1, arr2) {
    let row = arr1.length;
    let column = arr2[0].length;
    let answer = new Array(row).fill(0).map(element => new Array(column).fill(0));
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            for(let k = 0; k < arr2.length; k++) { // 수정된 부분
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return answer;
}