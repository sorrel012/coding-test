function solution(lines) {
    let points = [];
    lines.forEach(line => {
        points.push({ pos: line[0], type: 'start' });
        points.push({ pos: line[1], type: 'end' });
    });

    points.sort((a, b) => a.pos - b.pos);

    let overlapLength = 0; 
    let activeSegments = 0; 
    let lastPos = points[0].pos; 

    points.forEach(point => {
        if (activeSegments >= 2) {
            overlapLength += point.pos - lastPos;
        }
        if (point.type === 'start') {
            activeSegments++;
        } else {
            activeSegments--;
        }
        lastPos = point.pos;
    });

    return overlapLength;
}
