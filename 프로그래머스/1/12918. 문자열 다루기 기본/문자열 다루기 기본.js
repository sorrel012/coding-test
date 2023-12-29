function solution(s) {
    const regex = /^\d+$/;
    return (s.length === 4 || s.length === 6) && regex.test(s);
}