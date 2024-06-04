const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let v = 0;
let a = 0;
let b = 0;

rl.on('line', (line) => {
    [a, b, v] = line.split(' ').map(Number);
}).on('close', () => {
    const days = Math.ceil((v - a) / (a - b)) + 1;
    
    console.log(days);
})