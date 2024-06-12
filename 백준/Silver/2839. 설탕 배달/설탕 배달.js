const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;

rl.on('line', (line) => {
    n = +line;
}).on('close', () => {
    let answer = -1;
    for (let i = Math.floor(n / 5); i >= 0; i--) {
        let remaining = n - (i * 5);
        if (remaining % 3 === 0) {
            answer = i + (remaining / 3);
            break;
        }
    }
    console.log(answer);
    process.exit();
});
