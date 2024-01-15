function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);

    for (let digit of X) countX[digit]++;
    for (let digit of Y) countY[digit]++;

    let buddy = '';
    for (let i = 9; i >= 0; i--) {
        let count = Math.min(countX[i], countY[i]);
        buddy += i.toString().repeat(count);
    }

    return buddy.replace(/^0+$/, '0') || '-1';
}
