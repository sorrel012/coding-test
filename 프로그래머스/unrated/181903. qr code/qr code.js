function solution(q, r, code) {
    return [...code].filter((value, index) => index % q === r).join('');
}