const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let shirts = [];
let n = 0;
let currLine = 0;
let t = 0;
let p = 0;

rl.on('line', (line) => {
    if(currLine === 0) {
        n = +line;
    } else if(currLine === 1) {
        shirts = line.split(' ').map(Number);
    } else {
        [t, p] = line.split(' ').map(Number);
    }
    currLine++;
}).on('close', () => {
    //티셔츠    
    const shirtsCnt = shirts.reduce((acc, curr) => {
        return acc + Math.ceil(curr/t);
    }, 0);
    
    //펜
    const pensCnt = Math.floor(n / p);
    const penCnt = n % p;
    
    console.log(shirtsCnt);
    console.log(`${pensCnt} ${penCnt}`)
    
    process.exit();
})