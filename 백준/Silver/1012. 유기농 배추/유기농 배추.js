const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let t = 0;
let currTestCase = 0;
let cases = [];
let currentCase = null;

rl.on('line', (line) => {
    if (currTestCase === 0) {
        t = +line;
        currTestCase++;
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
                currTestCase++;
                if (currTestCase > t) {
                    solve();
                    rl.close();
                }
            }
        }
    }
});

function solve() {
    for (let i = 0; i < cases.length; i++) {
        let { m, n, k, cabbages } = cases[i];

        let visited = new Array(m).fill(null).map(() => new Array(n).fill(0));

        let count = 0;

        for (let j = 0; j < k; j++) {
            let [x, y] = cabbages[j];

            if (!visited[x][y]) {
                count++;
                dfs(x, y, visited, cabbages, m, n);
            }
        }

        console.log(count);
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
