function checkBrackets(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };     
    
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    let answer = 0 ;
    
    for(let i = 0; i < s.length; i++) {
        const str = s.slice(i) + s.slice(0, i);
        if(checkBrackets(str)) answer++;
    }
    
    return answer;
}