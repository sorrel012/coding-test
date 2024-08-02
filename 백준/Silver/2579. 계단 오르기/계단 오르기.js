const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n;
const input = [];
let currLine = 0;

rl.on('line', (line) => {
    if(currLine === 0) {
        n = +line;
    } else {
        input.push(+line);
    }
    currLine++;
}).on('close', () => {
    if (n === 1) {
        console.log(input[0]);
        process.exit();
    }

    const dp = new Array(n).fill(0);
    dp[0] = input[0];
    if (n > 1) {
        dp[1] = input[0] + input[1];
    }
    if (n > 2) {
        dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);
    }

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i-2] + input[i], dp[i-3] + input[i-1] + input[i]);
    }

    console.log(dp[n-1]);
    process.exit();
});
