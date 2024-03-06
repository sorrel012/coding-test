function solution(elements) {
    const circular = elements.concat(elements);
    const sumSet = new Set();
    
    for (let left = 0; left < elements.length; left++) {
        let sum = 0;
        for (let right = 0; right < elements.length; right++) {
            sum += circular[left + right];
            sumSet.add(sum);            
        }
    }
    return sumSet.size;
}