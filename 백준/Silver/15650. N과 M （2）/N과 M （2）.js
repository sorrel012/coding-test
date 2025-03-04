const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, M ;

rl.on('line', (line) => {
  if (!N || !M) {
    [N, M] = line.split(' ').map(Number);
    solve();
    rl.close();
  }
});

function solve() {
  const current = [];

  function backtrack(start) {
    // 수열의 길이가 M이 되면 출력
    if (current.length === M) {
      console.log(current.join(' '));
      return;
    }

    // 1부터 N까지의 숫자 중에서 고르기
    for (let i = start; i <= N; i++) {
      current.push(i); 
      backtrack(i + 1);
      current.pop(); // 다음 숫자를 고르기 위해 백트래킹
    }
  }

  backtrack(1);
}