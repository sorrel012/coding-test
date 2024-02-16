function solution(s) {
    let convertCnt = 0;
    let zeroCnt = 0;
    let newS = [...s]
    
    while(true) {
        if(newS.length === 1 && newS[0] === '1') break;
        
        let zero = newS.filter(num => num === '0').length;
        zeroCnt += zero;           
        
        newS = [...newS.filter(num => num === '1').length.toString(2)];        
        
        convertCnt++;    
    }
    
    return [convertCnt, zeroCnt];
}