function solution(wallpaper) {
    let position = [];
    wallpaper.forEach((row, i) => {
        [...row].forEach((el, j) => {
            if(el === '#') {
                position.push([i, j]);
            }
        })
    })
    
    const sortX = position.sort((a, b) => a[0] - b[0]);
    const lux = sortX[0][0];
    const rdx = sortX[position.length-1][0] + 1;
    
    const sortY = position.sort((a, b) => a[1] - b[1]);
    const luy = sortX[0][1];
    const rdy = sortX[position.length-1][1] + 1;
    
    return [lux, luy, rdx, rdy];
}