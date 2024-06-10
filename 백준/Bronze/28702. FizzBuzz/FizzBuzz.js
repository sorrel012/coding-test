const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];


rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let index = 0;
    
    input.forEach((item, idx) => {
        if(Number.isInteger(Number(item))) index = idx;
    })
    
    const nextNum = +input[index] + (3 - index);
    
    if(nextNum % 3 === 0 && nextNum % 5 === 0) {
        console.log('FizzBuzz');
    } else if(nextNum % 3 === 0) {
        console.log('Fizz');
    } else if(nextNum % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(nextNum);
    }
        
    process.exit();
})