const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let t;
const input = [];

rl.on('line', (line) => {
    if(typeof t === 'undefined') {
        t = +line;
    } else {
        input.push(+line);
    }
}).on('close', () => {
    const max = Math.max(...input);
    
    const dp = Array(max+1).fill(0);    
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    
    if(input[0] > 3) {
        for(let i = 4; i <= max; i++) {
            dp[i] = dp[i-2] + dp[i-3];
        }
    }
    
    for(const n of input) {
        console.log(dp[n]);
    }    
    
    process.exit(); 
});