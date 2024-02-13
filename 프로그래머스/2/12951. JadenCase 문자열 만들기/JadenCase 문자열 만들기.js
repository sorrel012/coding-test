function solution(s) {
    let strings = s.split(' ');
    
    return strings.map(word => {
        word = word.toLowerCase();
        
        if(typeof word[0] === 'string') {
            word = word[0].toUpperCase() + word.slice(1);
        }
        
        return word;
    }).join(' ');
}