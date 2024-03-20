function solution(s) {
    let answer = [];
    let arr = s.match(/{(.*?)}/g).map(s =>
        s.replace(/[{}]/g, '').split(',').map(Number)
    );
    
    arr.sort((a, b) => a.length - b.length);
    
    return arr.reduce((acc, curr, i) => {
        
        curr.forEach(num => {
            if(acc.indexOf(num) === -1)  acc.push(num)
        })
        
        return acc;
    }, []);
}