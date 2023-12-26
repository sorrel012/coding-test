function solution(x) {
    const sum = [...x.toString()].reduce((acc, num) => acc + +num, 0);
    return x % sum === 0 ? true : false;
}