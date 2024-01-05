function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        let tmp = Math.floor(n / a); 
        n = n - tmp * a + tmp * b; 
        answer += tmp * b; 
    }
    return answer;
}
