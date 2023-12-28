function solution(n) {
    const waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
    return waterMelon(n);
}