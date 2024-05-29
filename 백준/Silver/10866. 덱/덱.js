const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];
const output = [];
let n = 0;

rl.on('line', (line) => {
    input.push(line.split(' '));
}).on('close', () => {
    const deque = [];
    n = +input[0]
    for(let i = 1; i <= n; i++) {
        const currLine =  input[i][0];
        const isPush = currLine.startsWith('push');
        const isPop = currLine.startsWith('pop');
        if(isPush) {
            const direction = currLine.split('_')[1];
            if(direction === 'back') {
                deque.push(+input[i][1]);
            } else {
                deque.unshift(+input[i][1]);
            }
        } else if(isPop) {
            const direction = currLine.split('_')[1];
            if(direction === 'back') {
                output.push(deque.length > 0 ? deque.pop() : -1);
            } else {
                output.push(deque.length > 0 ? deque.shift() : -1);
            }
        } else if(currLine === 'size') {
            output.push(deque.length);
        } else if(currLine === 'empty') {
            output.push(deque.length > 0 ? 0 : 1);
        } else if(currLine === 'front') {
            output.push(deque.length > 0 ? deque[0] : -1);
        } else if(currLine === 'back') {
            output.push(deque.length > 0 ? deque[deque.length-1] : -1);
        }
    }
    
    console.log(output.join('\n'));
    process.exit();
})