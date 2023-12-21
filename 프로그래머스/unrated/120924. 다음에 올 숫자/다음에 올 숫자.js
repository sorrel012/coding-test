function solution(common) {
    let isArithmeticSequence = true;
    const len = common.length;
    for(let i = len-2; i > 0; i--) {
        if(common[i+1] - common[i] !== common[i] - common[i-1]) {
            isArithmeticSequence = false;
            break;
        }
    }
    return isArithmeticSequence ? common[len-1] + (common[1] - common[0]) : common[len-1] * (common[1] / common[0])
}