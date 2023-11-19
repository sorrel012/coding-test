function solution(arr) {
    let answer = [];
    
    for (num of arr) {
        for(let i = 0; i < num; i++) {
            answer.push(num);
        }
    }
    return answer;
}