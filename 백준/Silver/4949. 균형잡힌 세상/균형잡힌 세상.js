const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];
const output = [];

rl.on('line', (line) => {
    const str = input.push(line);
}).on('close', () => {
    for(let i = 0; i < input.length-1; i++) {
        const stack = [];
        let isBalanced = true;
        for(const char of input[i]) {
            if(char === '[' || char === '(') {
                stack.push(char);
            } else if(char === ']') {
                if(stack.pop() !== '[') {
                    isBalanced = false;
                    break;
                }
            }  else if(char === ')') {
                if(stack.pop() !== '(') {
                    isBalanced = false;
                    break;
                }
            } 
        }
        if(stack.length !== 0) isBalanced = false;
        if(isBalanced){
            output.push('yes');
        } else {
            output.push('no');
        }
    }
    
    console.log(output.join('\n'));
    
    process.exit();
})