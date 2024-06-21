const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
let m = 0;
const storedSite = new Map();
const findSite = [];
let currLine = 0;

rl.on('line', (line) => {
    if(currLine === 0) {
        [n, m] = line.split(' ').map(Number);
    } else if(currLine <= n) {
        const [site, password] = line.split(' ');
        storedSite.set(site, password);
    } else {
        findSite.push(line);
    }
    currLine++;
}).on('close', () => {
    const answer = findSite.map(site => storedSite.get(site));    
    
    console.log(answer.join('\n'));    
    process.exit();
})