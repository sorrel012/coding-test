const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let m = 0;
let n = 0;

rl.on('line', (line) => {
    [m, n] = line.split(' ').map(Number);
}).on('close', () => {
    const arr = new Array(n+1).fill(1);    
    arr[0] = arr[1] = 0;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!!arr[i]) {
            for (let j = i*i; j <= n; j += i) {
                arr[j] = 0;
            }
        }
    }
    
    const output = [];
    for (let i = m; i <= n; i++) {
        if(!!arr[i]) output.push(i);
    }
    
    
    console.log(output.join('\n'));
    process.exit();
})