function solution(n) {
    return [...n.toString()].map(val => +val).reverse();
}