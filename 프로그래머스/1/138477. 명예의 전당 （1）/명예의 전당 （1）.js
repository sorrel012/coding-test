function solution(k, score) {
    let answer = [];
    return score.map((num, i) => {
        if(i >= k) {
            if(num > answer[answer.length - 1]) {
                answer.pop();
                answer.push(num);
            }
        } else {
            answer.push(num);
        }
        answer.sort((a, b) => b - a);
        return answer[answer.length-1];
    })
}