const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
let m = 0;
const input = [];
let currLine = 0;

rl.on('line', (line) => {
    if(currLine === 0) {
        [n, m] = line.split(' ').map(Number);
    } else {
        input.push(line.split(' ').map(Number));        
    }
    currLine++;
}).on('close', () => {    
    let targetX = -1;
    let targetY = -1;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    // 목표지점 탐색
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(input[i][j] === 2) {
                targetX = i;
                targetY = j; 
                break;
            }
        }
        if (targetX !== -1) break; // 목표 지점을 찾으면 더 이상 탐색하지 않음
    }
    
    if (targetX === -1) {
        console.error("Error: No target point (2) found in the input.");
        process.exit(1);
    }
    
    const distances = Array.from(Array(n), () => Array(m).fill(-1));
    let queue = [[targetX, targetY]];
    distances[targetX][targetY] = 0;
    
    while(queue.length > 0) {
        const [currentRow, currentCol] = queue.shift();
        
        for(const [dx, dy] of directions) {
            const newRow = currentRow + dx;
            const newCol = currentCol + dy;

            if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && input[newRow][newCol] === 1 && distances[newRow][newCol] === -1) {
                distances[newRow][newCol] = distances[currentRow][currentCol] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        const resultLine = [];
        for(let j = 0; j < m; j++) {
            if(input[i][j] === 0) {
                resultLine.push(0);
            } else {
                resultLine.push(distances[i][j]);
            }
        }
        console.log(resultLine.join(' '));
    }
    
    process.exit();
});
