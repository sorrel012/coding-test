function solution(n, t, m, p) {
    let answer = '';
    let numbers = [];  
    
    let index = 0;
    while (numbers.length < t * m) {
        const str = index.toString(n).toUpperCase();
        for(const char of str) {
            numbers.push(char);
        }  
        index++;
    }
    
    for(let i = p-1; i < t*m; i += m) {
        answer += numbers[i];
    }    
    
    return answer.slice(0, t);
}