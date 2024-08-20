const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n;
const input = [];
rl.on('line', (line) => {
    if(!n) {
        n = +line;
    } else {
        input.push(line.split(''));
    }
}).on('close', () => {
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];    
    
    function dfs(x, y, currentColor, visited, colors) {
        const stack = [[x, y]];
        visited[x][y] = 1;
        
        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            
            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && colors[nx][ny] === currentColor) {
                    visited[nx][ny] = 1;
                    stack.push([nx, ny]);
                }
            }
        }
    }
    
    function countRegions(colors) {
        let visited = Array.from({ length: n }, () => Array(n).fill(0));
        let regionCount = 0;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!visited[i][j]) {
                    dfs(i, j, colors[i][j], visited, colors);
                    regionCount++;
                }
            }
        }
        
        return regionCount;
    }
    
    const normalView = countRegions(input);
    const colorWeakView = input.map(row => row.map(color => color === 'G' ? 'R' : color));
    const weakView = countRegions(colorWeakView);
    
    console.log(`${normalView} ${weakView}`);
    
    process.exit();
});
