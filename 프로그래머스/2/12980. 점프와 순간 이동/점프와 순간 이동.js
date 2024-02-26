function solution(n){
    if(n === 1) return 1;
    
    const nArr = Array.from(n.toString(2));
    
    return nArr.reduce((acc,curr) => (+acc) + (+curr));
}