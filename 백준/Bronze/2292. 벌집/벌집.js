const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n = 0;

rl.on('line', (line) => {
    n = +line.trim();    
}).on('close', () => {
    const getPath = (num) => {
        if (num === 1) return 1;

        let k = 1;
        let maxRoomInLayer = 1;

        while (num > maxRoomInLayer) {
            maxRoomInLayer += 6 * k; // 다음 층의 최대 방 번호를 계산
            k++;
        }
        return k;
    }
    console.log(getPath(n));
    
    process.exit();
})