const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n, m;
const input = [];
rl.on('line', (line) => {
    if (typeof n === 'undefined' && typeof m === 'undefined') {
        [n, m] = line.split(' ').map(Number);
    } else {
        input.push(line.split(' ').map(Number));
    }
}).on('close', () => {
    const adjacencyList = getAdjacent(input, n, m);
    console.log(getConnection(adjacencyList, n));
});

function getAdjacent(edges, n, m) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    for (let i = 0; i < m; i++) {
        const [u, v] = edges[i];
        graph[u].push(v);
        graph[v].push(u);
    }
    
    return graph;
}

function getConnection(adjacencyList, n) {
    const visited = Array(n + 1).fill(false);
    let count = 0;
    
    const dfs = (node) => {
        visited[node] = true;
        for (const neighbor of adjacencyList[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            count++;
            dfs(i);
        }
    }

    return count;
}
