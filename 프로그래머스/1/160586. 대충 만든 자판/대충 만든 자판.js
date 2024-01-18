function solution(keymap, targets) {
    const answer = [];
    const map = {}
    
    for (let keys of keymap) {
        [...keys].forEach((char, i) => {
            map[char] = map[char] < i+1 ? map[char] : i+1;
        });
    }
    
    for (let target of targets) {
        answer.push([...target].reduce((acc, cur) => acc += map[cur], 0) || -1)
    }
    
    return answer;
}
