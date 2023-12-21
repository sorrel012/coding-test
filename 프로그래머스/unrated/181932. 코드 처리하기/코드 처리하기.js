function solution(code) {
    let ret = [];
    let mode = 0;    
    [...code].forEach((v, i) => {
        if(v === '1') {
            mode = mode === 0 ? 1 : 0;
        } else {
            if(mode === 0 & i%2 === 0 || mode === 1 && i%2 === 1) ret.push(v);
        }
        
    });
    return ret.join('') || 'EMPTY';
}