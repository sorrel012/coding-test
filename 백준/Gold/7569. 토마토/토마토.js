const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});

let m, n, h;
const input = [];
let index = 0;
let tmp = [];

rl.on('line', (line) => {
    if (!m || !n || !h) {
        [m, n, h] = line.split(' ').map(Number);
    } else {        
        tmp.push(line.split(' ').map(Number));
        index++;
        
        if (index === n) { 
            input.push(tmp);
            tmp = []; 
            index = 0; 
        }
    }    
}).on('close', () => {
    const directions = [
        [-1, 0, 0], 
        [1, 0, 0],
        [0, -1, 0],
        [0, 1, 0],
        [0, 0, -1],
        [0, 0, 1]        
    ];
    
    let queue = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
                if (input[i][j][k] === 1) {
                    queue.push([i, j, k]);
                }
            }
        }
    }

    let front = 0;
    let answer = 0;
    
    while (front < queue.length) {
        let isExist = false;
        const queueLength = queue.length;
        for (let i = front; i < queueLength; i++) {
            const [z, y, x] = queue[i];
            for (const [dz, dy, dx] of directions) {
                const nz = z + dz;
                const ny = y + dy;
                const nx = x + dx;
                if (nz >= 0 && nz < h && ny >= 0 && ny < n && nx >= 0 && nx < m && input[nz][ny][nx] === 0) {
                    input[nz][ny][nx] = 1;
                    queue.push([nz, ny, nx]);
                    isExist = true;
                }
            }
        }
        if (isExist) {
            answer++;      
            ixExit = false;      
        }
        front = queueLength;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
                if (input[i][j][k] === 0) {
                    console.log(-1);
                    process.exit();
                }
            }
        }
    }

    console.log(answer);    
    process.exit();
});
