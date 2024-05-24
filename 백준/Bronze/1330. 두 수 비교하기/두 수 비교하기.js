const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

let A;
let B;

rl.on('line', (line) => {
    [A, B] = line.split(' ');    
    rl.close();
});

rl.on('close', () => {
    
    if(+A >+ B) {
        console.log('>');
    } else if (+A < +B) {
        console.log('<');
    } else {
        console.log('==')
    }
    
    process.exit();
});
