const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];
let n = 0;
let currLine = 0;

rl.on('line', (line) => {
    if(currLine === 0) {
        n = +line;
    } else {
        input.push(+line);
    }
    currLine++;
}).on('close', () => {
    const edge = Math.round(n * 0.15);
    input.sort((a, b) => a - b);
    
    let sum = 0;
    if(n > 0) {
        for(let i = edge; i < n-edge; i++) {
            sum += input[i];
        }
        console.log(Math.round(sum / (n - edge*2)));
    } else {
        console.log(0);
    }
    
    
    process.exit();
})