function solution(a, b) {
    let remainder = 0;
    const mul = a * b; 

    while (b !== 0) { 
        remainder = a % b; 
        a = b;
        b = remainder; 
    }

    return [a, mul/a];
}