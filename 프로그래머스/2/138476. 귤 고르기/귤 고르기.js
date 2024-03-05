function solution(k, tangerine) {
    const sizeCount = {};
    tangerine.forEach(size => {
        sizeCount[size] = (sizeCount[size] || 0) + 1;
    });

    const sortedCounts = Object.values(sizeCount).sort((a, b) => b - a);

    let totalCount = 0;
    let typeCount = 0;
    for (let count of sortedCounts) {
        totalCount += count;
        typeCount++;
        if (totalCount >= k) break; 
    }

    return typeCount;
}