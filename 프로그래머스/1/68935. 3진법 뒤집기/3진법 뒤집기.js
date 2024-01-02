function solution(n) {
    return parseInt([...n.toString(3)+''].reverse().join('').toString(10), 3);
}