const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let m = 0;
let v = 0;
const input = [];
let currLine = 0;

rl.on('line', (line) => {
    if (currLine === 0) {
        [n, m, v] = line.split(' ').map(Number);
        currLine++;
    } else {
        input.push(line.split(' ').map(Number));
    }
    currLine++;
}).on('close', () => {
    const graph = Array.from({ length: n + 1 }, () => []);
    input.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    graph.forEach(adjList => adjList.sort((a, b) => a - b));

    const dfsResult = dfs(v, graph);
    const bfsResult = bfs(v, graph);
    
    console.log(dfsResult.join(' '));
    console.log(bfsResult.join(' '));
    
    process.exit();
}); 

const dfs = (v, graph) => {
    const visited = Array(graph.length).fill(false);
    const result = [];
    const stack = [v];
    
    while (stack.length) {
        const node = stack.pop();
        if (!visited[node]) {
            visited[node] = true;
            result.push(node);
            for (let i = graph[node].length - 1; i >= 0; i--) {
                const neighbor = graph[node][i];
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

const bfs = (v, graph) => {
    const visited = Array(graph.length).fill(false);
    const result = [];
    const queue = [v];
    visited[v] = true;
    
    while (queue.length) {
        const node = queue.shift();
        result.push(node);
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}
