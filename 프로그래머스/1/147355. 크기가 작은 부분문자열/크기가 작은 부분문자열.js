function solution(t, p) {
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        if(+p >= +(t.substring(i, i+p.length))) answer++;
    }
    return answer;
}