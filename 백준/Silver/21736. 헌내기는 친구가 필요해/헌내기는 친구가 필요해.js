const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const campus = input.map(line => line.split(''));

    let startRow, startCol;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (campus[i][j] === 'I') {
                startRow = i;
                startCol = j;
                break;
            }
        }
    }

    const directions = [
        [1, 0], 
        [-1, 0], 
        [0, 1], 
        [0, -1] 
    ];

    let peopleCnt = 0;
    let visited = Array.from(Array(n), () => Array(m).fill(0));

    const dfs = (row, col) => {
        if (row < 0 || row >= n || col < 0 || col >= m || !!visited[row][col] || campus[row][col] === 'X') {
            return;
        }

        visited[row][col] = 1;

        if (campus[row][col] === 'P') {
            peopleCnt++;
        }

        for (const [dRow, dCol] of directions) {
            dfs(row + dRow, col + dCol);
        }
    };

    dfs(startRow, startCol);
    console.log(peopleCnt === 0 ? 'TT' : peopleCnt);

    process.exit();
});
