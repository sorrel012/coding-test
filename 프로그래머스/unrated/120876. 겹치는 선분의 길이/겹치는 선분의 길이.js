function solution(lines) {
    let line = new Array(201).fill(0);

    lines.forEach(([begin, end]) => {
        for(let i = begin; i < end; i++) line[i + 100]++;
    });

    return line.reduce((sum, v) =>  v > 1 ? sum+1 : sum, 0)
}