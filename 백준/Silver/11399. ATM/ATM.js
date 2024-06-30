const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = +input[0];
    const people = input[1].split(' ').map(Number);
    people.sort((a, b) => a - b);    
    
    const minSum = people.reduce((acc, curr, index) => {
        return acc + curr * (n - index);
    }, 0);
    
    console.log(minSum);
    
    process.exit();
})