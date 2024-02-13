function solution(s) {
    const numbers = s.split(' ');
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    return `${min} ${max}`;
}