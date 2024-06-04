const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];
let currLine = 0;

rl.on('line', (line) => {
    if(currLine !== 0) {
        if(line === '0') {
            input.pop();
        } else {
            input.push(+line);
        }
    }
    currLine++;
}).on('close', () => {
    const sum = input.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    
    console.log(sum);
    
    process.exit();
})