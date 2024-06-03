const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let testCases = 0;
const input = [];
let currIndex = 0;

rl.on('line', (line) => {
    if (currIndex === 0) {
        testCases = +line;
    } else {
        input.push(+line);
    }
    currIndex++;
}).on('close', () => {
    const sum = (k, n) => {
        let residents = Array.from({ length: n }, (_, i) => i + 1);

        for (let floor = 1; floor <= k; floor++) {
            for (let room = 1; room < n; room++) {
                residents[room] += residents[room - 1];
            }
        }

        return residents[n - 1];
    };

    for (let i = 0; i < testCases; i++) {
        const k = input[i * 2];
        const n = input[i * 2 + 1];

        console.log(sum(k, n));
    }

    process.exit();
});
