function solution(price, money, count) {
    const answer = price * (count * (count + 1) / 2) - money;
    return answer > 0 ? answer : 0;
}