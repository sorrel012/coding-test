const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (line) => {
    let [n, k] = line.split(' ').map(Number);
    console.log(bfs(n, k));
    rl.close();
});

function bfs(n, k) {
    const max = 100000;
    const visited = Array(max+1).fill(0);
    const queue = [];
    
    queue.push([n, 0]); 
    visited[n] = 1;

    while (queue.length > 0) {
        const [x, time] = queue.shift();

        if (x === k) {
            return time;
        }

        const nx = [x-1, x+1, x*2];

        for (const next of nx) {
            if (next >= 0 && next <= max && !visited[next]) {
                visited[next] = 1;
                queue.push([next, time+1]);
            }
        }
    }
}
