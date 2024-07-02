const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;

rl.on('line', (line) => {
    n = +line;
}).on('close', () => {
    const dp = Array.from({ length: n+1 }, (_, i) => i);
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i-j*j] + 1);
        }
    }

    console.log(dp.pop());
    
    process.exit();
})