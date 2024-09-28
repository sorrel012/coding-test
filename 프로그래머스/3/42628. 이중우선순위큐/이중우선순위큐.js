function solution(operations) {
    let command, numStr;
    const queue = [];
    
    for(const operation of operations) {
        [command, numStr] =  operation.split(' ');
        
        const num = +numStr;
        
        if(command === 'I') {
            queue.push(num);
        } else {
            if(num === 1) {
                const max = Math.max(...queue);
                const maxIndex = queue.indexOf(max);
                queue.splice(maxIndex, 1);
            } else {
                const min = Math.min(...queue);
                const minIndex = queue.indexOf(min);
                queue.splice(minIndex, 1);                
            }
        }
    }
    
    if(queue.length === 0) {
        return [0, 0];
    } else {
        const max = Math.max(...queue);
        const min = Math.min(...queue);
        
        return [max,min];
    }
    
    return answer;
}