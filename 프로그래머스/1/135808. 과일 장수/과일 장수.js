function solution(k, m, score) {
    let maxProfit = 0;
    score.sort((a, b) => b - a); 

    for(let i = 0; i <= score.length - m; i += m) {
        let minScoreInBox = score[i];
        for (let j = 1; j < m; j++) {
            minScoreInBox = Math.min(minScoreInBox, score[i + j]);
        }
        maxProfit += minScoreInBox * m;
    }

    return maxProfit;
}
