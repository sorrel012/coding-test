const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = +input[0];
    const m = +input[1];
    const targetStr = input[2]
    let patternStr = ''
    for(let i = 0; i < 2*n+1; i++) {
        if(i % 2 === 0) {
            patternStr += 'I';
        } else {
            patternStr += 'O';
        }
    }
    
    let answer = 0;
    const regex = new RegExp(patternStr);
    const length = patternStr.length;
    for(let i = 0; i <= m-length; i++) {
        const subStr = targetStr.substr(i, length);        
        if(subStr.match(regex)) answer++;
    }
    
    console.log(answer);
    process.exit();
});