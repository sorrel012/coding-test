const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});

let n;
let r;
let c;

rl.on('line', (line) => {
    [n, r, c] = line.split(' ').map(Number);
}).on('close', () => {
    let result = findPosition(n, r, c);
    console.log(result);
    process.exit();
});

function findPosition(n, r, c) {
    if (n === 0) return 0;

    let half = 1 << (n - 1);
    let areaSize = half * half;

    if (r < half && c < half) {
        return findPosition(n - 1, r, c);
    } else if (r < half && c >= half) {
        return areaSize + findPosition(n - 1, r, c - half);
    } else if (r >= half && c < half) {
        return 2 * areaSize + findPosition(n - 1, r - half, c);
    } else {
        return 3 * areaSize + findPosition(n - 1, r - half, c - half);
    }
}
