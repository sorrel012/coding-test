function solution(n, t, m, p) {
    let tubeTurn = new Array(t).fill(0).map((_, i) => i*m+p-1);
    let line = '';
    const max = m*t + p;
    
    for (let i = 0; line.length <= max; i++) {
        line += i.toString(n);
    }
    
    return tubeTurn.map(a => line[a]).join('').toUpperCase();
}
