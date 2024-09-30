function solution(n, computers) {
    let answer = 0;
    
    const visited = new Array(n).fill(0);    
    const dfs = (computer) => {
        const stack = [computer];
        visited[computer] = 1;
        
        while (stack.length > 0) {
            const computer = stack.pop();
            
            for (let i = 0; i < n; i++) {
                if (computers[computer][i] === 1 && !visited[i]) {
                    visited[i] = 1;
                    stack.push(i);
                }
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {  
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}