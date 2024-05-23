const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
})

let N = 0;
let K = 0

rl.on('line', (line) => {
    [N, K] = line.split(' ').map(Number);    
    rl.close()
});

rl.on('close', () => {
    
    const factorial = (n) =>  {
        return (n > 1) ? n * factorial(n - 1) : 1;
    }
    
    let answer = factorial(N) / (factorial(N-K) *  factorial(K))
    
    console.log(answer);
});