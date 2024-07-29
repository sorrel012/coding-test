const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let t = 0;
let currLine = 0;
let cases = [];
let currentCase = null;

rl.on('line', (line) => {
    if (currLine === 0) {
        t = +line;
        currLine++;
    } else {
        if (!currentCase) {
            let [m, n, k] = line.split(' ').map(Number);
            currentCase = { m, n, k, cabbages: [] };
        } else {
            let location = line.split(' ').map(Number);
            currentCase.cabbages.push(location);
            if (currentCase.cabbages.length === currentCase.k) {
                cases.push(currentCase);
                currentCase = null;
                currLine++;
                if (currLine > t) {
                    solve();
                    rl.close();
                }
            }
        }
    }
});

function solve() {
    for (const currentCase  of cases) {
        let { m, n, k, cabbages } = currentCase;

        let visited = Array.from({length: m}, () => new Array(n).fill(0));
        let cnt = 0;

        for (let i = 0; i < k; i++) {
            let [x, y] = cabbages[i];

            if (!visited[x][y]) {
                cnt++;
                dfs(x, y, visited, cabbages, m, n);
            }
        }

        console.log(cnt);
    }
}

function dfs(x, y, visited, cabbages, m, n) {
    let stack = [[x, y]];
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (stack.length > 0) {
        let [cx, cy] = stack.pop();
        visited[cx][cy] = 1;

        for (let d = 0; d < directions.length; d++) {
            let nx = cx + directions[d][0];
            let ny = cy + directions[d][1];

            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                if (!visited[nx][ny] && hasCabbage(nx, ny, cabbages)) {
                    stack.push([nx, ny]);
                    visited[nx][ny] = 1;
                }
            }
        }
    }
}

function hasCabbage(x, y, cabbages) {
    return cabbages.some(([cx, cy]) => cx === x && cy === y);
}
