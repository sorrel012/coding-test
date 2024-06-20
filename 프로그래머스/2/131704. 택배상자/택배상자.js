function solution(order) {
    let answer = 0;
    let stack = [];
    let index = 0;

    for (let i = 1; i <= order.length; i++) {
        stack.push(i);

        while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
            stack.pop();
            index++;
            answer++;
        }
    }

    return answer;
}