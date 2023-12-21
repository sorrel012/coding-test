function solution(num, total) {
    let answer = [];
    if(num % 2 === 1) {
        const mid = total / num;
        answer.push(mid);
        for(let i = 1; i <= (num - 1) / 2; i++) {
            answer.push(mid - i);
            answer.push(mid + i);
        }
    } else {
        const num1 = Math.floor(total / num);
        const num2 = Math.ceil(total/num);
        answer.push(num1);
        answer.push(num2);
        for(let i = 1; i <= (num - 2) / 2; i++) {
            answer.push(num1 - i);
            answer.push(num2 + i);
        }
    }
    return answer.sort((a, b) => a - b);
}