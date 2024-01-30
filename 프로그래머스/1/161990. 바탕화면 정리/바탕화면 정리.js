function solution(wallpaper) {
    let positionX = []; //column
    let positionY = []; //row
    wallpaper.forEach((row, i) => {
        [...row].forEach((el, j) => {
            if(el === '#') {
                positionX.push(i);
                positionY.push(j);
            }
        })
    })
    
    return [Math.min(...positionX), Math.min(...positionY), Math.max(...positionX)+1, Math.max(...positionY)+1];
}