function solution(lottos, win_nums) {
    const winNumsSet = new Set(win_nums);
    let matchCount = 0;
    let zerosCount = 0;

    for (const num of lottos) {
        if (num === 0) {
            zerosCount++;
        } else if (winNumsSet.has(num)) {
            matchCount++;
        }
    }
    
    const rank = [6, 6, 5, 4, 3, 2, 1];    
    return [rank[matchCount + zerosCount], rank[matchCount]];
}