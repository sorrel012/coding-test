const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let a = 0;
let b = 0;

rl.on('line', (line) => {
    [a, b] = line.split(' ').map(num => +num);
}).on('close', () => {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    console.log(gcd(a,b));
    console.log(lcm(a,b));
    process.exit();
})