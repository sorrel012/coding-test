function solution(topping) {
    const n = topping.length;
    const leftSet = new Set();
    const rightSet = new Set();
    const leftCounts = Array(n).fill(0);
    const rightCounts = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        leftSet.add(topping[i]);
        leftCounts[i] = leftSet.size;
    }

    for (let i = n - 1; i >= 0; i--) {
        rightSet.add(topping[i]);
        rightCounts[i] = rightSet.size;
    }

    let answer = 0;
    for (let i = 0; i < n - 1; i++) {
        if (leftCounts[i] === rightCounts[i + 1]) {
            answer++;
        }
    }

    return answer;
}
