function solution(a, b, c) {
    const nums = new Set([a, b, c]);
    if(nums.size === 3) {
        return a + b + c;
    } else if(nums.size === 2) {
        return (a + b + c) * calculate(a, b, c, 2)
    } else {
        return (a + b + c) * calculate(a, b, c, 2) * calculate(a, b, c, 3)
    }    
}

function calculate(a, b, c, exponent) {
    return Math.pow(a, exponent) + Math.pow(b, exponent) + Math.pow(c, exponent)
}