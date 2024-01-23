function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    moves.forEach(v => {
        for(let i = 0; i < board.length; i++) {
            let tmp = board[i][v-1];
            if(tmp !== 0) {
                if(stack[stack.length-1] === tmp) {
                    answer += 2;
                    stack.pop();
                } else {                    
                    stack.push(tmp);
                }
                board[i][v-1] = 0;
                break;
            }
        }
    });    
    return answer;
}