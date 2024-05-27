const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const queue = [];
let input = [];
let output = [];
let N = 0;

rl.on('line', (line) => {
    input.push(line)        
}).on('close', () => {
    N = +input[0];
    
    for(let i = 1; i <= N; i++) {        
        const [command, value] = input[i].split(' ');
        switch(command) {
            case 'push':
                queue.push(+value);
                break;
            case 'pop':
                output.push(queue.length > 0 ? queue.shift() : -1);
                break;
            case 'size':
                output.push(queue.length);
                break;
            case 'empty':
                output.push(queue.length === 0 ? 1 : 0);
                break;
            case 'front':
                output.push(queue.length === 0 ? -1 : queue[0]);
                break;
            case 'back':
                output.push(queue.length === 0 ? -1 : queue[queue.length-1]);
                break;
        }
    }
    
    console.log(output.join('\n'));
    process.exit();
});

