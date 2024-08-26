const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T, K;
let filesizes = [];
let testCase = 0;

rl.on('line', (line) => {
  if (!T) {
    T = +line;
  } else if (!K) {
    K = +line;
    filesizes = [];
  } else {
    filesizes = line.split(' ').map(Number);
    solve();
    K = null;
    testCase++;
    if (testCase === T) {
      rl.close();
    }
  }
});

function solve() {
  const n = filesizes.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  const sum = [0];

  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + filesizes[i];
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + sum[j + 1] - sum[i]);
      }
    }
  }

  console.log(dp[0][n - 1]);
}