function solution(arr) {
    let answer = 0;
    let prev = [];

    while(!arr.every((value,idx) => value === prev[idx])) {
        prev =[...arr];

        arr = arr.map(value => {
            if(value >= 50 & value % 2 == 0)
                return value / 2;
            if(value < 50 & value % 2 != 0)
                return value * 2 + 1;
            return value;
        })
        answer++;
    }
    return answer - 1;
}