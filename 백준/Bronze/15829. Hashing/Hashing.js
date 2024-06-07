const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const l = +input[0]; 
    const str = input[1]; 

    console.log(hashFunc(l, str));
    process.exit();
});

function hashFunc(l, str) {  
  const M = 1234567891;
  let hash = 0;
  let r = 1;

  //여기서부터는 문제에 나와있는 시그마를 활용한 식을 거의 옮긴 것이나 다름없다
  for (let i = 0; i < l; i++) {
    hash += (str[i].charCodeAt() - "a".charCodeAt() + 1) * r;
    r *= 31;
    r %= M;
    hash %= M;
  }

  return hash;
}
