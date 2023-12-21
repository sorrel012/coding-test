function solution(code) {
    let ret = [];
    let mode = 0;
    [...code].forEach((v, i) => {
        if(mode === 0) {
            if(v === '1') mode = 1;
            else {
                if (i % 2 === 0) ret.push(v);
            }
        } else {
            if(v === '1') mode = 0;
            else {
                if (i % 2 === 1) ret.push(v);
            }
        }
    });
    return ret.join('') || 'EMPTY';
}