const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n, m;
const input = [];

rl.on('line', (line) => {
    if(!n || !m)     {
        [n, m] = line.split(' ').map(Number);        
    } else {
        input.push(line.split(' ').map(Number));
    }
}).on('close', () => {
    const adjacentList = getAdjacentList(input, n+1);
    let minBacon = Infinity;
    let answer = 0;
    
    const bfs = (startNode) => {
        const distances = Array(n+1).fill(-1);
        const queue = [startNode];
        distances[startNode] = 0;

        while (queue.length > 0) {
            const current = queue.shift();
            for (let i = 1; i <= n; i++) {
                if (adjacentList[current][i] === 1 && distances[i] === -1) {
                    distances[i] = distances[current] + 1;
                    queue.push(i);
                }
            }
        }

        return distances.reduce((acc, curr) => acc + (curr === -1 ? 0 : curr), 0);
    };
    
    for (let i = 1; i <= n; i++) {
        const baconNumber = bfs(i);
        if (baconNumber < minBacon) {
            minBacon = baconNumber;
            answer = i;
        }
    }
    
    console.log(answer);
    process.exit();
})

function getAdjacentList(arr, len) {
    const adjacentList = Array.from({length: len}, () => Array(len).fill(0));
    
    for(const [a, b] of arr) {
        adjacentList[a][b] = 1;
        adjacentList[b][a] = 1;        
    }
    
    return adjacentList;    
}