function solution(n, lost, reserve) {
    let actualReserve = reserve.filter(v => !lost.includes(v));
    let actualLost = lost.filter(v => !reserve.includes(v));

    let answer = n - actualLost.length;

    actualReserve.sort((a, b) => a - b).forEach(v => {
        let prev = actualLost.indexOf(v - 1);
        if (prev !== -1) {
            actualLost.splice(prev, 1);
            answer++;
            return;
        }

        let next = actualLost.indexOf(v + 1);
        if (next !== -1) {
            actualLost.splice(next, 1);
            answer++;
            return;
        }
    });

    return answer;
}