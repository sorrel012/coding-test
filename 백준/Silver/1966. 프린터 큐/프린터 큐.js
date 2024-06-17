const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let currLine = 0;
const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const numOfTestCases = parseInt(input[currLine++]);
    let result = [];
    
    for (let i = 0; i < numOfTestCases; i++) {
        const [N, M] = input[currLine++].split(' ').map(Number);
        const priorities = input[currLine++].split(' ').map(Number);

        let queue = priorities.map((priority, index) => ({ priority, index }));
        let printOrder = 0;

        while (queue.length > 0) {
            let current = queue.shift();
            if (queue.some(item => item.priority > current.priority)) {
                queue.push(current);
            } else {
                printOrder++;
                if (current.index === M) {
                    result.push(printOrder);
                    break;
                }
            }
        }
    }

    console.log(result.join('\n'));
    process.exit();
})