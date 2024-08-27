const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const tetrominos = [
    [[1, 1, 1, 1]],
    [[1], [1], [1], [1]],

    [[1, 1], [1, 1]],

    [[1, 1, 1], [0, 1, 0]],
    [[1, 0], [1, 1], [1, 0]],
    [[0, 1, 0], [1, 1, 1]],
    [[0, 1], [1, 1], [0, 1]],

    [[1, 0, 0], [1, 1, 1]],
    [[1, 1], [1, 0], [1, 0]],
    [[1, 1, 1], [0, 0, 1]],
    [[0, 1], [0, 1], [1, 1]],
    [[0, 0, 1], [1, 1, 1]],
    [[1, 1], [0, 1], [0, 1]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 0], [1, 0], [1, 1]],

    [[0, 1, 1], [1, 1, 0]],
    [[1, 0], [1, 1], [0, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1], [1, 1], [1, 0]],
];

function getSum(tetromino, x, y) {
    let sum = 0;
    for (let i = 0; i < tetromino.length; i++) {
        for (let j = 0; j < tetromino[i].length; j++) {
            if (tetromino[i][j] === 1) {
                sum += board[x + i][y + j];
            }
        }
    }
    return sum;
}

let maxSum = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        for (let t of tetrominos) {
            if (i + t.length <= N && j + t[0].length <= M) {
                maxSum = Math.max(maxSum, getSum(t, i, j));
            }
        }
    }
}

console.log(maxSum);
