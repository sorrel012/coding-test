function solution(n) {
    let answer = 0 ;
    
    while(n > 0) {
        if(n % 2 !== 0) {
            answer++;
            n--;
        } else {
            n /= 2;
        }
    }
    
    return answer;
}