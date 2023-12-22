function solution(n) {
    let arr = new Array(n).fill().map(() => new Array(n).fill(0));
    let row = 0, col = 0;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dirIdx = 0; 

    for (let i = 0; i < n*n; i++) {
        arr[row][col] = i + 1;
        let nextRow = row + directions[dirIdx][0];
        let nextCol = col + directions[dirIdx][1];

        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || arr[nextRow][nextCol] !== 0) {
            dirIdx = (dirIdx + 1) % 4;
            nextRow = row + directions[dirIdx][0];
            nextCol = col + directions[dirIdx][1];
        }

        row = nextRow;
        col = nextCol;
    }

    return arr;
}
