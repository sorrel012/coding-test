const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let m, n;
let numbers = [];
let prefixSum = [];
const sections = [];
let isInputNumbers = false;

rl.on('line', (line) => {
    if (!m || !n) {
        [n, m] = line.split(' ').map(Number);
    } else if (!isInputNumbers) {
        numbers = line.split(' ').map(Number);
        prefixSum = new Array(n+1).fill(0);
        
        for (let i = 1; i <= n; i++) {
            prefixSum[i] = prefixSum[i-1] + numbers[i-1];
        }
        
        isInputNumbers = true;
    } else {
        sections.push(line.split(' ').map(Number));
    }
}).on('close', () => {
    const output = [];

    for (const [start, end] of sections) {
        output.push(prefixSum[end] - prefixSum[start-1]);
    }

    console.log(output.join('\n'));
    process.exit();
});
