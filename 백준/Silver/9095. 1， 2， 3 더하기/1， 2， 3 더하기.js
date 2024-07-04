const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin    
});

const input = [];
rl.on('line', (line) => {
    input.push(+line);
}).on('close', () => {   
    const dp = new Array(11).fill(0);
    dp[0] = 1; 
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= 10; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }

    const T = input[0];
    const output = [];

    for (let i = 1; i <= T; i++) {
        const n = input[i];
        output.push(dp[n]);
    }
    
    console.log(output.join('\n'));    
    process.exit();
});