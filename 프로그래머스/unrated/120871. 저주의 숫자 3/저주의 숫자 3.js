function solution(n) {
    let answer = [];
    let i = 1;
    while(answer.length !== n) {
        if (i % 3 !== 0 && !i.toString().includes('3')) {
            answer.push(i);
        }
        i++;
    }
    return answer.pop();
}