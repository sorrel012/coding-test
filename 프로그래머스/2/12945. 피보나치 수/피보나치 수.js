function solution(n) {
    let prevPrev = 0, prev = 1, tmp;

    for (let i = 2; i <= n; i++) {
        curr = (prevPrev + prev) % 1234567;
        prevPrev = prev;
        prev = curr;
    }

    return prev;
}
