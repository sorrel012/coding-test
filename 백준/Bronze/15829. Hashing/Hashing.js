const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let input = [];
let currLine = 0;

rl.on('line', (line) => {
    if(currLine !== 0) {
        input = line.split('').map(item => item.charCodeAt(0) - 96);
    }
    currLine++;
}).on('close', () => {
    const sum = input.reduce((acc, curr, index) => {
        return (acc + (curr * modPow(31, index, 1234567891))) % 1234567891;
    }, 0)
    
    console.log(sum % 1234567891);
    
    process.exit();
});

function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
}