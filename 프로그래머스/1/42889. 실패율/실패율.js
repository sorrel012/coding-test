function solution(N, stages) {
    let stageReached = new Array(N+1).fill(0);
    let stageFailed = new Array(N+1).fill(0);
       
    for (let stage of stages) {
        for (let j = 1; j <= stage; j++) {
            stageReached[j]++;
        }
        stageFailed[stage]++;
    }
    
    let failRates = [];
    for (let i = 1; i <= N; i++) {
        let rate = stageReached[i] > 0 ? stageFailed[i] / stageReached[i] : 0;
        failRates.push([i, rate]);
    }
    
    return failRates.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}