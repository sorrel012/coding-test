function solution(numLog) {
    let answer = '';
    const convert = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a'
    }
    for(let i = 1; i < numLog.length; i++) {
        answer += convert[numLog[i]-numLog[i-1]];            
    }
    return answer;
}