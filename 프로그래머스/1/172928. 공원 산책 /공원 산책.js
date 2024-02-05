function solution(park, routes) {
    const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
    let [y, x] = [0, 0];
    
    for (let i = 0; i < park.length; i++) {
        const j = park[i].indexOf('S');
        if (j !== -1) {
            [y, x] = [i, j];
            break;
        }
    }
    
    for(let route of routes) {
        const [direction, distance] = route.split(' ');
        let [ny, nx] = [y, x];
        let cnt = 0;
         
        while (cnt < +distance) {
            [ny, nx] = [ny + dirs[direction][0], nx + dirs[direction][1]];
            if (!park[ny] || !park[ny][nx] || park[ny][nx] === 'X') break;
            cnt++;
        }
        if (cnt == +distance) [y, x] = [ny, nx];
    };
     
    return [y, x];
}
