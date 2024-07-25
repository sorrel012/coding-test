const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let n = 0;
let m = 0;
const input = [];
let currLine = 0;

rl.on('line' , (line) => {
    if(currLine === 0) {
        n = +line;
    } else if (currLine === 1) {
        m = +line;
    } else {
        input.push(line.split(' ').map(Number));
    }
    currLine++;
}).on('close', () => {
    const computers = getAdjacentComputers(input, n);
    console.log(dfs(computers, 1));
});

const getAdjacentComputers = (arr, n) => {
    const adjacentComputers = Array.from({ length: n+1 }, () => []);
    
    for([a, b] of arr) {
        adjacentComputers[a].push(b);
        adjacentComputers[b].push(a);
    }
    
    return adjacentComputers;
}

const dfs = (computers, start) => {
    const visited = new Array(computers.length).fill(0);
    const stack = [start];
    visited[start] = 1;
    
    let result = 0;
    while(stack.length > 0) {
        const computer = stack.pop();
        
        for (const linkedComputer of computers[computer]) {
            if (!visited[linkedComputer]) {
                stack.push(linkedComputer);
                visited[linkedComputer] = 1;
                result++;
            }
        }
    }
    
    return result;
}