const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [m, n] = input[0].split(' ').map(Number);
const tomatoes = input.slice(1).map(line => line.split(' ').map(Number));

function bfs() {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [];
    let unripeTomatoes = 0;
    let front = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (tomatoes[i][j] === 1) {
                queue.push([i, j, 0]); 
            } else if (tomatoes[i][j] === 0) {
                unripeTomatoes++;
            }
        }
    }

    if (unripeTomatoes === 0) {
        return 0;
    }

    let maxDays = 0;
    while (front < queue.length) {
        const [x, y, days] = queue[front++];
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && tomatoes[nx][ny] === 0) {
                tomatoes[nx][ny] = 1;
                unripeTomatoes--;
                queue.push([nx, ny, days + 1]);
                maxDays = Math.max(maxDays, days + 1);
            }
        }
    }

    return unripeTomatoes === 0 ? maxDays : -1;
}

console.log(bfs());
