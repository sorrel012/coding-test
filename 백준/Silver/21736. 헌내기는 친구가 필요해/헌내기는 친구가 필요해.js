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
     let queue = [[startRow, startCol]];
    let visited = Array.from(Array(n), () => Array(m).fill(false));
    visited[startRow][startCol] = true;

    let peopleCount = 0;

    while (queue.length > 0) {
        const [currentRow, currentCol] = queue.shift();

        for (const [dRow, dCol] of directions) {
            const newRow = currentRow + dRow;
            const newCol = currentCol + dCol;

            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && !visited[newRow][newCol] && campus[newRow][newCol] !== 'X') {
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol]);

                if (campus[newRow][newCol] === 'P') {
                    peopleCount++;
                }
            }
        }
    }

    if (peopleCount === 0) {
        console.log('TT');
    } else {
        console.log(peopleCount);
    }
    
    process.exit();    
});