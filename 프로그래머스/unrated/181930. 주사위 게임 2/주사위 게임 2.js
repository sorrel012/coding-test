function solution(a, b, c) {
    const nums = new Set([a, b, c]);
    const arr = [...nums];
    if(arr.length === 3) {
        return a + b + c;
    } else if(arr.length === 2) {
        return (a + b + c) * (Math.pow(a, 2)+Math.pow(b, 2)+Math.pow(c, 2))
    } else {
        return (a + b + c) * (Math.pow(a, 2)+Math.pow(b, 2)+Math.pow(c, 2)) * (Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3))
    }    
}