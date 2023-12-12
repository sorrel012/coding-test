function solution(my_string, m, c) {
    let answer = '';
    let nums = [];
    for(let i = 0; i < my_string.length; i+= m) {
        let tmp =  [...my_string.slice(i, i + m)];
        nums.push(tmp);
    }
    for(let arr of nums) {
        answer += arr[c-1];
    }
    return answer;
}