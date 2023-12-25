function solution(s){
    const arr = [...s.toUpperCase()];
    const pCnt = arr.filter(v => v === 'P').length;
    const yCnt = arr.filter(v => v === 'Y').length;
    
    return pCnt === yCnt ? true : false;
}