function solution(s) {
    let firstCnt = 0;
    let othersCnt = 0;
    
    let answer = [];
    let startIdx = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === s[startIdx] ? firstCnt++ : othersCnt++;
        if (firstCnt === othersCnt) {
            answer.push(s.substring(startIdx, i + 1));
            startIdx = i + 1;
        }
    }

    if (startIdx < s.length) {
        answer.push(s.substring(startIdx));
    }

    return answer.length;
}
