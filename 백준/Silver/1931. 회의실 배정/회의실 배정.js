const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
let currLine = 0;
const input = [];

rl.on('line', (line) => {
    if(currLine === 0) {
        n = +line;
    } else {
        input.push(line.split(' ').map(Number));
    }
    currLine++;
}).on('close', () => {
    input.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    
    let cnt = 0;
    let endTime = 0;

    for (const [start, end] of input) {
        if (start >= endTime) {
            cnt++;
            endTime = end;
        }
    }
    
    console.log(cnt);
    process.exit();
});