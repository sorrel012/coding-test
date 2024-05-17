function solution(dirs) {
    let visitedPaths = new Set();
    let curr = [0, 0];
    
    const directions = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };
    
    for(const dir of dirs) {
        const nextDirection = directions[dir];
        const nextCoordinate = [curr[0] + nextDirection[0], curr[1] + nextDirection[1]];
        
        if (nextCoordinate[0] < -5 || nextCoordinate[0] > 5 || nextCoordinate[1] < -5 || nextCoordinate[1] > 5) {
            continue;
        }
        
        const path1 = `${curr[0]},${curr[1]},${nextCoordinate[0]},${nextCoordinate[1]}`;
        const path2 = `${nextCoordinate[0]},${nextCoordinate[1]},${curr[0]},${curr[1]}`;
        
        visitedPaths.add(path1);
        visitedPaths.add(path2);        
        
        curr = nextCoordinate;
    }
    
    return visitedPaths.size / 2;
}