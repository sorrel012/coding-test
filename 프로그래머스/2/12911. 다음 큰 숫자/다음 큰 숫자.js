function solution(n) {
    let rightMostZeroFlip = n + (n & -n);
    let nextHigherOneBit = n ^ rightMostZeroFlip; 
    nextHigherOneBit = (nextHigherOneBit / (n & -n)) >> 2; 
    let result = rightMostZeroFlip | nextHigherOneBit; 
    return result;
}
