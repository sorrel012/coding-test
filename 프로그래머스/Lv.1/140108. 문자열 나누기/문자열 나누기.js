function solution(s) {
    let firstCnt = 0;
    let othersCnt = 0;
    
    let answer = 0;
    let startIdx = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === s[startIdx] ? firstCnt++ : othersCnt++;
        if (firstCnt === othersCnt) {
            answer++;
            startIdx = i + 1;
        }
    }

    if (startIdx < s.length) {
        answer++;
    }

    return answer;
}
