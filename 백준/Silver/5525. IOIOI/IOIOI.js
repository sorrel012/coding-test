const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = +input[0];
    const m = +input[1];
    const s = input[2];

    let result = 0;
    let count = 0;
    let i = 0;

    while (i < m - 1) {
        if (s[i] === 'I' && s[i + 1] === 'O') {
            count = 0;
            while (i < m - 1 && s[i] === 'I' && s[i + 1] === 'O') {
                count++;
                i += 2;
                if (i < m && s[i] === 'I') {
                    if (count >= n) {
                        result++;
                    }
                } else {
                    break;
                }
            }
        } else {
            i++;
        }
    }

    console.log(result);
    process.exit();
});
