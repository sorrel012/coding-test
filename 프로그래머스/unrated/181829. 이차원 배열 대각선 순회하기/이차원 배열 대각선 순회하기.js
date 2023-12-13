function solution(board, k) {
    return board.reduce(
        (total, row, i) => total + row.reduce((sum, num, j) => (i + j <= k ? sum + num : sum), 0),
        0,
    );
}