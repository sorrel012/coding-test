function solution(strArr) {
    let tmp = Array(30).fill(0);
    strArr.forEach(value => {
        tmp[value.length - 1] += 1;
    })
    return Math.max(...tmp);
}