const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const stack = [];
let input = [];
let output = [];
let N = 0;

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    N = +input[0];
    for (let i = 1; i <= N; i++) {
        const command = input[i].split(' ')[0];
        switch(command) {
            case 'push':
                const number = +input[i].split(' ')[1];
                stack.push(number);
                break;
            case 'pop':
                output.push(stack.length > 0 ? stack.pop() : -1);
                break;
            case 'size':
                output.push(stack.length);
                break;
            case 'empty':
                output.push(stack.length === 0 ? 1 : 0);
                break;
            case 'top':
                output.push(stack.length > 0 ? stack[stack.length - 1] : -1);
                break;
        }
    }
    console.log(output.join('\n'));
    process.exit();
});
