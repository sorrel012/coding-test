function solution(m, n, board) {
    board = board.map(row => row.split(''));
    
    
    while (true) {
        let toRemove = new Set();

        for (let i = 0; i < m-1; i++) {
            for (let j = 0; j < n-1; j++) {
                let block = board[i][j];
                if (block &&
                    block === board[i][j+1] &&
                    block === board[i+1][j] &&
                    block === board[i+1][j+1]) {
                    toRemove.add(`${i},${j}`);
                    toRemove.add(`${i},${j+1}`);
                    toRemove.add(`${i+1},${j}`);
                    toRemove.add(`${i+1},${j+1}`);
                }
            }
        }

        if (toRemove.size === 0) break;

        toRemove.forEach(position => {
            const [i, j] = position.split(',').map(Number);
            board[i][j] = null;
        });

        for (let j = 0; j < n; j++) {
            let emptyRow = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] !== null) {
                    [board[i][j], board[emptyRow][j]] = [board[emptyRow][j], board[i][j]];
                    emptyRow--;
                }
            }
        }
    }

    let answer = 0;
    board.forEach(row => {
        row.forEach(cell => {
            if (cell === null) answer++;
        });
    });

    return answer;
}