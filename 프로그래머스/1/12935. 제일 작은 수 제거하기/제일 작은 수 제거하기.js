function solution(arr) {
    if (arr.length === 1) {
        return [-1]; 
    }
    return arr.filter(item => item !== Math.min(...arr)); 
}
