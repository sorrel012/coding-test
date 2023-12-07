function solution(arr) {
    for(let i = 0; i < parseInt(arr.length/2); i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    return 1;
}