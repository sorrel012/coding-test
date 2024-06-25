const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = +input[0];
    const fruits = input[1].split(' ').map(Number);    
    
    let left = 0;
    let maxFruits = 0;
    const fruitCount = new Map();

    for (let right = 0; right < n; right++) {
        const rightFruit = fruits[right];
        fruitCount.set(rightFruit, (fruitCount.get(rightFruit) || 0) + 1);

        while (fruitCount.size > 2) {
            const leftFruit = fruits[left];
            fruitCount.set(leftFruit, fruitCount.get(leftFruit) - 1);
            if (fruitCount.get(leftFruit) === 0) {
                fruitCount.delete(leftFruit);
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    console.log(maxFruits);
    process.exit();
});
