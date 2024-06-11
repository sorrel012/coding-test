const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;

rl.on('line', (line) => {
    n = +line;
}).on('close', () => {
    let count = 0;
    for (let i = 5; i <= n; i *= 5) {
        count += Math.floor(n / i);
    }
    
    console.log(count);
    process.exit();
});
