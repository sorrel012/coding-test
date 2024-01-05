function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b).reduce((acc, cur, i) => {
        const sum = acc + cur;
        if(sum <= budget) {
            answer++;
        }
        return sum;
    }, 0);
    return answer;
}