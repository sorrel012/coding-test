const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let N = 0;
const input = [];
const output = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    N = +input[0];
    for(let i = 1; i <= N; i++) {
        const ps = input[i];
        const stack = [];

        let result = 'YES';
        for(const char of ps) {
            if(char === '(') {
                stack.push('(');
            } else {
                const top = stack[stack.length-1];
                if(top !== '(') {
                    result = 'NO';
                    break;
                } else {
                    stack.pop();
                }
            }            
        }
        if(stack.length !== 0){
            result ='NO';
        } 
        output.push(result);
    }
    
    console.log(output.join('\n'));
    process.exit();
})

