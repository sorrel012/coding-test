function solution(a, b) {
    let conn = +((a + '')+(b + ''));
    let mul = 2 * a * b;
    return conn >= mul ? conn : mul;
}