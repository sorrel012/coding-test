const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const n = BigInt(line.trim());
    let factorial = BigInt(1);

    for (let i = BigInt(2); i <= n; i++) {
        factorial *= i;
    }

    const factorialStr = factorial.toString();
    let count = 0;

    for (let i = factorialStr.length - 1; i >= 0; i--) {
        if (factorialStr[i] === '0') {
            count++;
        } else {
            break;
        }
    }

    console.log(count);
    rl.close();
});
