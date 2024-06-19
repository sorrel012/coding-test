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
    let currentNum = 1;
    
    for (let i = 0; i < n; i++) {
        const targetNum = input[i];
        
        while (currentNum <= targetNum) {
            stack.push(currentNum);
            answer.push('+');
            currentNum++;
        }
        
        if (stack[stack.length - 1] === targetNum) {
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