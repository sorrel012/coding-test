const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
const input = [];
let currLine = 0;

rl.on('line', (line) => {
    if (currLine === 0) {
        n = +line;
    } else {
        input.push(line.split('').map(Number));
    }
    currLine++;
}).on('close', () => {
    const result = findComplexes(input, n);
    console.log(result.length);
    console.log(result.join('\n'));
    process.exit();
});

const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
];

const dfs = (arr, visited, x, y, n) => {
    let stack = [[x, y]];
    visited[x][y] = 1;
    let cnt = 0;

    while (stack.length > 0) {
        const [cx, cy] = stack.pop();
        cnt++;

        for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = 1;
                stack.push([nx, ny]);
            }
        }
    }

    return cnt;
}

const findComplexes = (arr, n) => {
    const result = [];
    const visited = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === 1 && !visited[i][j]) {
                result.push(dfs(arr, visited, i, j, n));
            }
        }
    }

    result.sort((a, b) => a - b);
    return result;
}
