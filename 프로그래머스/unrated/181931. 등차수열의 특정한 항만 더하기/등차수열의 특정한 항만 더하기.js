function solution(a, d, included) {
    return included.reduce((sum, value, i) => sum + (value === true ? i * d + a : 0), 0);
}