const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
let m = 0;
let currLine = 0;
const input = [];

rl.on('line', (line) => {
    if(currLine === 0) {
        [n, m] = line.split(' ').map(Number);
    } else {
        input.push(line.split('').map(Number));
    }
    currLine++;
}).on('close', () => {
    console.log(getMinCell([0,0], [n-1,m-1]));
    process.exit();
});

const getMinCell = ([startX, startY], [targetX, targetY]) => {
    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];
    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    const queue = [[startX, startY, 1]];
    visited[startX][startY] = true;
    
    while(queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x === targetX && y === targetY) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && input[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
        
    }
    
    return -1;    
}