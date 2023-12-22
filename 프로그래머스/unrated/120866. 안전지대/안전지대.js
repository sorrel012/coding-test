function solution(board) {
    const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0] , [0, 1], [1, -1], [1, 0], [1, 1]];
    let newArr = new Array(board.length).fill().map(() => new Array(board.length).fill(0));
    board.forEach((arr, i) => {
        arr.forEach((num, j) => {
            if(num === 1) {
                for(let [row, col] of dir) {
                    let dangerousRow = i + row;
                    let dangerousCol = j + col;
                    
                    if(dangerousRow >= 0 && dangerousRow < board.length && dangerousCol >= 0 && dangerousCol < board.length ) {
                        newArr[dangerousRow][dangerousCol] = 1;
                    }
                }
            }
        })
    })
    return newArr.reduce((acc, arr) => {
        return acc + arr.filter(v => v === 0).length;
    }, 0);
}