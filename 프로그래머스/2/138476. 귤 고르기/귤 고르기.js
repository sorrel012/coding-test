function solution(k, tangerine) {
    let answer = 0;
    const tangerineSizes = {};
    
    tangerine.forEach(size => {
        tangerineSizes[size] = (tangerineSizes[size] || 0) + 1;
    });

    const sortedTanerines = Object.values(tangerineSizes).sort((a, b) => b - a);

    for (const tangerineCnt of sortedTanerines) {
        answer++;
        if (k > tangerineCnt) k -= tangerineCnt;
        else break;
    }
    
    return answer;
}