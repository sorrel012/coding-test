function solution(dots) {
    const slope = (p1, p2) => (p2[1] - p1[1]) / (p2[0] - p1[0]);

    const slopes = [
        slope(dots[0], dots[1]),
        slope(dots[1], dots[2]),
        slope(dots[2], dots[3]),
        slope(dots[3], dots[0])
    ];

    if (slopes[0] === slopes[2] || slopes[1] === slopes[3]) {
        return 1;
    }
    
    return 0;
}