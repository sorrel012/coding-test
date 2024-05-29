const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];
const output = [];

rl.on('line', (line) => {
    const currLine = line.split(' ').map(item => +item);    
    input.push(currLine);
}).on('close', () => {
    for(let i = 0; i < input.length-1; i++)     {
        const sides = input[i];
        sides.sort((a, b) => a - b);
        if(Math.sqrt(sides[0]**2 + sides[1]**2) === sides[2]) {
            output.push('right');
        } else {
            output.push('wrong');
        }
    }
    
    console.log(output.join('\n'));
    process.exit();
});