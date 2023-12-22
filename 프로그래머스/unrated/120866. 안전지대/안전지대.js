function solution(board) {

    let dangerous = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((arr, i) => arr.forEach((num, j) => {
        if (num === 1) return false;
        return dangerous.some(([row, col]) => !!board[i + row]?.[j + col])
               ? false : safezone++;
    }));

    return safezone;
}