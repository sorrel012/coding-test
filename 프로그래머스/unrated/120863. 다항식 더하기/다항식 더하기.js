function solution(polynomial) {
    let linearTerm = [];
    let constTerm = [];
    for(let v of polynomial.split(' + ')) {
        if (v.includes('x')) {
            if(v === 'x') {
                linearTerm.push('1x');                
            } else {                
                linearTerm.push(v);
            }
        } else {
            constTerm.push(v);
        }
    }
    let res1 = linearTerm.reduce((sum, num) => {
        return sum + parseInt(num.slice(0, -1));
    }, 0) + 'x';
    if(res1 === '1x') {
        res1 = 'x';
    }
    let res2 = constTerm.reduce((sum, num) => sum + parseInt(num), 0);
    
    if(res1 === '0x') {
        return res2 + '';
    } else if(res2 === 0) {
        return res1;
    } else {
        return `${res1} + ${res2}`
    }
        
}