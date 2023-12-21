function solution(quiz) {
    return quiz.map(value => {
        const [left, right] = value.split(' = ');
        const [num1, operator, num2] = left.split(' ');

        if (operator === '+') {
            return +num1 + +num2 === +right ? 'O' : 'X';
        } else if (operator === '-') {
            return +num1 - +num2 === +right ? 'O' : 'X';
        }
    });
}
