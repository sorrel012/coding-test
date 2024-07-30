const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
rl.on('line', (line) => {
    n = +line;
}).on('close', () => {
    const mod = 10007;
    
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }

    console.log(dp[n]);    
    process.exit();
})