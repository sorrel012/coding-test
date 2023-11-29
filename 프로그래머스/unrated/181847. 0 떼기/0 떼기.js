function solution(n_str) {
    let idx = 0;
    while (n_str.charAt(idx) === '0') {
        idx++;
    }
    return n_str.substring(idx);
}