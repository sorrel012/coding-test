function solution(lottos, win_nums) {
    const same = lottos.filter(v => win_nums.includes(v));
    const len = same.length;
    if(len === 6) {
        return [1, 1];
    }
    same.forEach(v => {
        win_nums.splice(win_nums.indexOf(v), 1);
    })
    let zeroNums = lottos.filter(v => v === 0).length;
    
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    return [rank[len + zeroNums], rank[len]];
}