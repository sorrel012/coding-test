const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n;
rl.on('line', (line) => {
    n = +line;
}).on('close', () => {
    const dp = Array(n).fill(0);
    dp[1] = 1;
    if (n > 1) dp[2] = 3;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + 2*dp[i - 2]) % 10007;
    }
    
    console.log(dp[n]);
    process.exit();
})