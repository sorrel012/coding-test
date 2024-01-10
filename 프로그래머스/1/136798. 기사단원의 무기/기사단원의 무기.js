function countDivisors(num) {
    const numbers = new Array(num+1).fill(0);
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j += i) {
            numbers[j]++;
        }
    }
    return numbers;
}

function solution(number, limit, power) {
    const divisors = countDivisors(number);
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        if (divisors[i] > limit) {
            answer += power;
        } else {
            answer += divisors[i];
        }
    }
    
    return answer;
}
