function solution(s) {
    const num = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9        
    }
    
    Object.keys(num).forEach(key => {
        const regExp = new RegExp(key, 'g');
        s = s.replace(regExp, num[key]);
    });

    return parseInt(s);
}