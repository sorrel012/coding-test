function solution(binomial) {
    const [num1, op, num2] = binomial.split(' ');
    if(op === '+') {
        return +num1 + +num2;
    } else if(op === '-') {
        return +num1 - +num2;
    } else {
        return +num1 * +num2;
    }
}