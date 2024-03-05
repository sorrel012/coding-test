function solution(k, tangerine) {
    let answer = 0;
    const tangerineSizes = {};
    
    tangerine.forEach(size => {
        tangerineSizes[size] = (tangerineSizes[size] || 0) + 1;
    });

    const sortedTanerines = Object.values(tangerineSizes).sort((a, b) => b - a);

    let totalCount = 0;
    for (let count of sortedTanerines) {
        totalCount += count;
        answer++;
        if (totalCount >= k) break; 
    }

    return answer;
}