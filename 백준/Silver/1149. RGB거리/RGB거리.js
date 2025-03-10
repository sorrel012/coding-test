const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let costs = [];

rl.on('line', (line) => {
    if(!n) {
        n = +line.trim();
    } else {
        costs.push(line.split(' ').map(Number));
        if (costs.length === n) {
            solve();
            rl.close();
        }
    }
});

function solve() {
    const dp = Array.from({ length: n }, () => Array(3).fill(0));

    dp[0][0] = costs[0][0];
    dp[0][1] = costs[0][1];
    dp[0][2] = costs[0][2];
    
    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + costs[i][0];
        dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + costs[i][1];
        dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + costs[i][2];
    }
    
    console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));
}