const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let m, n;
let trees = [];

rl.on('line', (line) => {
    if (typeof n === 'undefined') {
        [n, m] = line.split(' ').map(Number);
    } else {
        trees = line.split(' ').map(Number);
    }
}).on('close', () => {
    let low = 0;
    let high = Math.max(...trees);
    let result = 0;

    while (low <= high) {
        let mid = Math.floor((low+high) / 2);
        const sum = trees.reduce((acc, curr) => {
            return acc + (curr > mid ? curr - mid : 0);
        }, 0);

        if (sum >= m) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    console.log(result);
    process.exit();
});
