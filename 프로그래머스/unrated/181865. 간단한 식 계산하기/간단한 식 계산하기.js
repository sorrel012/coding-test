function solution(binomial) {
    let arr = binomial.split(' ');
    num1 = +arr[0];
    num2 = +arr[2];
    op = arr[1];
    
    if(op === '+') {
        return num1 + num2;
    } else if(op === '-') {
        return num1 - num2;
    } else {
        return num1 * num2;
    }
}