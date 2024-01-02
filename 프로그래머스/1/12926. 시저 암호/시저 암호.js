function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === ' ') {
            answer += char;
            continue;
        }
        
        let isUpperCase = char === char.toUpperCase();
        let alphabet = isUpperCase ? upper : lower;
        let index = (alphabet.indexOf(char) + n) % 26;
        answer += alphabet[index];
    }
    
    return answer;
    
}