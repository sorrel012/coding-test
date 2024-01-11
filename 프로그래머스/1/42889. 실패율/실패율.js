function solution(N, stages) {
    let stageScores = new Array(N+2).fill(0);
    for(let stage of stages) {
        for(let i = 1; i <= stage; i++) {
            stageScores[i]++;
        }
    }
    stageScores.pop();
    
    let fail = new Array(N+2).fill(0);
    for(let stage of stages) {
        fail[stage]++;
    }
    fail.pop();
    
    let failRatio = stageScores.map((v, i) => [i, fail[i]/v]);       
    failRatio.shift();
    
    return failRatio.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}