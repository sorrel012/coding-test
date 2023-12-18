function solution(arr) {
    let i = 0;
    let stk = [];
    while(i < arr.length) {
        let last = stk[stk.length - 1];
        if(stk.length === 0) {            
            stk.push(arr[i++]);
        }
        else if(last < arr[i]) {
            stk.push(arr[i++]);            
        } else {
            stk.pop();
        }
    }
    return stk;
}