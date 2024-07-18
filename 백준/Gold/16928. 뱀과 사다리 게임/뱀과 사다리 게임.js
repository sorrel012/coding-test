const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currLine = 0;
let n = 0;
let m = 0;
const ladders = [];
const snakes = [];

rl.on('line', (line) => {
    if (currLine === 0) {
        [n, m] = line.split(' ').map(Number);
    } else if (currLine <= n) {
        ladders.push(line.split(' ').map(Number));
    } else if (currLine <= n + m) {
        snakes.push(line.split(' ').map(Number));
    }
    currLine++;
}).on('close', () => {
    const minDiceThrows = (N, M, ladders, snakes) => {
        let board = Array(101).fill(0);

        for (let [start, end] of ladders) {
            board[start] = end;
        }
        for (let [start, end] of snakes) {
            board[start] = end;
        }

        let visited = Array(101).fill(false);
        let queue = [];
        queue.push([1, 0]); 
        visited[1] = true;

        while (queue.length > 0) {
            let [current, moves] = queue.shift();

            if (current === 100) {
                return moves;
            }

            for (let dice = 1; dice <= 6; dice++) {
                let next = current + dice;

                if (next <= 100 && !visited[next]) {
                    visited[next] = true;

                    if (board[next] !== 0) {
                        next = board[next];
                    }

                    queue.push([next, moves + 1]);
                }
            }
        }

        return -1;
    }

    console.log(minDiceThrows(n, m, ladders, snakes)); 
    process.exit();
});
