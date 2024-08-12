const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (line) => {
    const parts = line.split('-');    
    let sum = 0;

    sum += parts[0].split('+').reduce((acc, curr) => acc + +curr, 0);
    
    for (let i = 1; i < parts.length; i++) {
        sum -= parts[i].split('+').reduce((acc, curr) => acc + +curr, 0);
    }
    
    console.log(sum);
    rl.close();
});
