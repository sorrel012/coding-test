function solution(s){
    let stack = [];
    let answer = true;
    
    [...s].forEach(v => {
        if(v === '(') {
            stack.push('(');
        } else {
            if(stack[stack.length-1] === '(') {
                stack.pop();
            } else {
                answer = false;
            }
        }
        
    })
    
    if(stack.length !== 0) answer = false;
    
    return answer;
}