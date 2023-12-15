function solution(intStrs, k, s, l) {
    return intStrs.map(value => parseInt(value.substring(s, s+l))).filter(value => value > k);
}