function solution(word) {
    let answer = 0;
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let nextWeight = [1+5**1+5**2+5**3+5**4, 1+5**1+5**2+5**3, 1+5**1+5**2, 1+5**1, 1];
    
    for (let i = 0; i < word.length; i++) {
        let index = vowels.indexOf(word[i]);
        answer += index * nextWeight[i] + 1;
    }
    
    return answer;
}