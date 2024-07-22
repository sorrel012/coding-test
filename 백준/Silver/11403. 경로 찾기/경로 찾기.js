const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currLine = 0;
let n = 0;
const input = [];

rl.on('line', (line) => {
    if (currLine === 0) {
        n = +line;
    } else {
        input.push(line.split(' ').map(Number));
    }
    currLine++;
}).on('close', () => {
    const result = findPaths(input, n);
    result.forEach(row => console.log(row.join(' ')));
    process.exit();
});

function findPaths(graph, n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = graph[i][j];
        }
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (result[i][k] && result[k][j]) {
                    result[i][j] = 1;
                }
            }
        }
    }
    return result;
}
