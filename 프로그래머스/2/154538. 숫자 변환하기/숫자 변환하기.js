function solution(x, y, n) {
    let answer = -1;    
    let queue = [[y, 0]];
    let visited = new Set();
    
    while(queue.length > 0) {
        const [currNum, currCnt] = queue.shift();
        
        if(currNum === x) {
            answer = currCnt;
            break;
        } 
        
        if(currNum > x) {
            const minus = currNum - n;
            const two = currNum / 2;
            const three = currNum / 3;

            if (minus >= x && !visited.has(minus)) {
                queue.push([minus, currCnt + 1]);
                visited.add(minus);
            }
            if (Number.isInteger(two) && two >= x && !visited.has(two)) {
                queue.push([two, currCnt + 1]);
                visited.add(two);
            }
            if (Number.isInteger(three) && three >= x && !visited.has(three)) {
                queue.push([three, currCnt + 1]);
                visited.add(three);
            }
        }
        
    }
    
    return answer;
}