function solution(arr) {
    let answer = [];
    
    for (let num of arr) {
        for(let i = 0; i < num; i++) {
            answer.push(num);
        }
    }
    return answer;
}