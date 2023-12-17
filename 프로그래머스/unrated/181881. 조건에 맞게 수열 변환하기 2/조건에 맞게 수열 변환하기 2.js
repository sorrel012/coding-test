function solution(arr) {
    let cnt = 0;
    let arr1 = arr;
    let arr2 = [];
    do {
        arr2 = arr1.map(value => value >= 50 && value % 2 === 0 ? value / 2 : value < 50 && value % 2 !== 0 ? value * 2 + 1 : value);
        if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
            break;
        }
        cnt++;
        arr1 = arr2.slice();
    } while (true);
    return cnt;
}
