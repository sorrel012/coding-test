const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let k = 0;
let n = 0;
const input = [];
let currLine = 0;

rl.on('line', (line) => {
    if (currLine === 0) {
        [k, n] = line.split(' ').map(Number);
    } else {
        input.push(+line);
    }
    currLine++;
}).on('close', () => {    
    const binarySearch = (min, max) => {      
        let result = 0;
        while (min <= max) {
            let mid = Math.floor((min + max) / 2);
            let sum = input.reduce((acc, curr) => {
                return acc + Math.floor(curr / mid);
            }, 0);            
            if (sum >= n) {
                result = mid; 
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }
        return result;
    };
    
    console.log(binarySearch(1, Math.max(...input)));
    process.exit();
});