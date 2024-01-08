function solution(n, arr1, arr2) {
    const addZero = (n, s) => {
        return '0'.repeat(n - s.length) + s;
    }
    
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}


