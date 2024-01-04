function solution(food) {
    let answer = [];
    food.shift();
    
    food.forEach((el, i) => {
        for(let j = 0; j < Math.floor(el/2); j++) {
            answer.push(i+1);
        }
    })
    answer.push(0);
    for(let k = answer.length - 2; k >= 0; k--) {
        answer.push(answer[k]);
    }
    return answer.join('');
}