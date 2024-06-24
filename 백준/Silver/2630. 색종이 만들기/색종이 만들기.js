const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;
const input = [];
let currLine = 0;
let currCol = 0;

rl.on('line', (line) => {
    const cols = [];
    if(currLine === 0) {
        n = +line;
    } else {
        input.push(line.split(' ').map(Number));
    }
    currLine++;
}).on('close', () => {
    let blue = 0;
    let white = 0;
    
  //  const isSameColor = (paper, firstType) => {
    //    return paper.every(item => item === firstType);
    //}
    
    const isSameColor = (arr, x, y, size) => {
        const firstColor = arr[x][y];
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (arr[x + i][y + j] !== firstColor) {
                    return false;
                }
            }
        }
        return true;
    }
    
    const parseSquare = (arr, x, y, size) => {
        if (isSameColor(arr, x, y, size)) {
            if (arr[x][y] === 0) {
                white++;
            } else {
                blue++;
            }
        } else {
            const newSize = size / 2;
            parseSquare(arr, x, y, newSize);
            parseSquare(arr, x, y + newSize, newSize);
            parseSquare(arr, x + newSize, y, newSize);
            parseSquare(arr, x + newSize, y + newSize, newSize);
        }
    }
    
    parseSquare(input, 0, 0, n);
    
    console.log(white);
    console.log(blue);    
    
    process.exit();
})