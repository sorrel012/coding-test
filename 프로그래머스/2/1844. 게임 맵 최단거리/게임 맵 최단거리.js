function solution(maps) {
    const rowLen = maps.length;
    const colLen = maps[0].length;

    const directions = [
        [0, 1], 
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    const queue = [[0, 0, 1]];
    const visited = Array.from(Array(rowLen), () => Array(colLen).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        if (x === rowLen-1 && y === colLen-1) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < rowLen && ny >= 0 && ny < colLen) {
                if (maps[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }

    return -1;
}
