function solution(number) {
    return [...number].reduce((sum, value) => sum + +value, 0) % 9;
}