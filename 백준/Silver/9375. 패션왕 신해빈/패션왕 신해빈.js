const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let t;
const input = [];

rl.on('line', (line) => {
    if (t === undefined) {
        t = parseInt(line);
    } else {
        input.push(line);
    }
}).on('close', () => {
    const output = [];
    let index = 0;

    while (index < input.length) {
        let n = parseInt(input[index++]);
        const clothes = new Map();

        for (let i = 0; i < n; i++) {
            const [name, sort] = input[index++].split(' ');
            if (clothes.has(sort)) {
                clothes.set(sort, clothes.get(sort) + 1);
            } else {
                clothes.set(sort, 1);
            }
        }

        let answer = 1;
        clothes.forEach(count => {
            answer *= (count + 1);
        });

        output.push(answer - 1);
    }

    console.log(output.join('\n'));
});
