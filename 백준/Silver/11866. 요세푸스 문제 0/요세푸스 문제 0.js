const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const people = [];
let n = 0;
let k = 0;
const output = [];

rl.on('line', (line) => {
    [n, k] = line.split(' ').map(item => +item);
}).on('close', () => {
    // 1-n 까지의 사람 번호
    for(let i = 1; i <= n; i++) {
        people.push(i);
    }
    
    let index = 0;
    while(people.length > 0) {
        index = (index + (k-1)) % people.length;
        output.push(people[index]);
        people.splice(index, 1);
    }

    console.log('<' + output.join(', ') + '>');    
    process.exit();
})