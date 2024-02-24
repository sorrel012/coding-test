function solution(n, words) {
    let usedWords = new Set();
    
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        
        if((i > 0 && words[i-1].slice(-1) !== word[0]) || usedWords.has(word)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        usedWords.add(word);
    }

    return [0, 0];
}
