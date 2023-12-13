function solution(board, k) {
    let sum = 0;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j <= k - i && j < board[i].length; j++) {
            sum += board[i][j];
        }
    }
    return sum;
}