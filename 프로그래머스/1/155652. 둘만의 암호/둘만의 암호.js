function solution(s, skip, index) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let char of skip) {
        const index = alphabets.indexOf(char);
        if (index !== -1) {
            alphabets.splice(index, 1);
        }
    }
    
    return [...s].map((v, i) => alphabets[(alphabets.indexOf(v)+index) % alphabets.length]).join('');
}