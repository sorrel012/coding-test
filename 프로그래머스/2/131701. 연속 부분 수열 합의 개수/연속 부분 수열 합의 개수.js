function solution(elements) {
    const doubledElements = [...elements, ...elements];
    const sumSet = new Set(); 

    const n = elements.length;

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = start; i < start+length; i++) {
                sum += doubledElements[i];
            }
            sumSet.add(sum);
        }
    }

    return sumSet.size;
}
