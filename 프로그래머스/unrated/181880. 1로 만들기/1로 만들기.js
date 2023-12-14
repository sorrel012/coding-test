function solution(num_list) {
    return num_list.reduce((total, value) => {
        let cnt = 0;
        while(value !== 1) {
            value = value % 2 === 0 ? value / 2 : (value - 1) / 2;
            cnt++;
        }
        return total + cnt;
    }, 0)
}