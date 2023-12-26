function solution(absolutes, signs) {
    signs.forEach((v, i) => {
        if(!v) {
            absolutes[i] *= -1;
        }
    })
    return absolutes.reduce((acc, cur) => acc + cur, 0);
}