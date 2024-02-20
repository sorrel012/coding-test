function solution(n) {   
    let binaryN = [...n.toString(2)].filter(v => v === '1').length; 
    let index = n+1;
    
    while(true) {
        answer = index.toString(2);
        if([...answer.toString(2)].filter(v => v === '1').length === binaryN) {
            return index;
        }
        index++;
    }
    
    return answer;
}