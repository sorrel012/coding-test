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
    const answer = [];
    const stack = [];
    let current = 1;
    
    for (let i = 0; i < n; i++) {
        const target = input[i];
        
        while (current <= target) {
            stack.push(current);
            answer.push('+');
            current++;
        }
        
        if (stack[stack.length - 1] === target) {
            stack.pop();
            answer.push('-');
        } else {
            console.log('NO');
            return;
        }
    }
    
    console.log(answer.join('\n'));
    
    process.exit(); 
});