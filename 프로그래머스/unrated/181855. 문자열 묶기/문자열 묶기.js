function solution(strArr) {
    let tmp = Array(30).fill(0);
    strArr.forEach(value => {
        tmp[value.length - 1] += 1;
    })
    return tmp.reduce((max, value) => {
        return max < value ? value : max;
    }, tmp[0]);
}