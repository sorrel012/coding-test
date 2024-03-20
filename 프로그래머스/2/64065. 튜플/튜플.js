function solution(s) {
    let arr = s.slice(2, -2).split('},{').map(str => str.split(',').map(Number));
    
    arr.sort((a, b) => a.length - b.length);
    
    return arr.reduce((acc, cur) => [...acc, ...cur.filter(num => !acc.includes(num))], []);
}

