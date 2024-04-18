function solution(priorities, location) {
    let order = 0;
    let queue = priorities.map((v, i) => ([ i, v ]));
    
    while (queue.length > 0) {
        let process = queue.shift();
        if (queue.some(v => v[1] > process[1])) {
            queue.push(process);
        } else {
            order += 1;
            if (process[0] === location) {
                return order;
            }
        }
    }
}