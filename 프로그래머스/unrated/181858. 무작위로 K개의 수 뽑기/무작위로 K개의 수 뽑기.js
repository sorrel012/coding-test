function solution(arr, k) {
    let tmp = new Set(arr);
    arr = Array.from(tmp);
    while(arr.length > k) {
        arr.pop();
    }    
    const len = arr.length;
    if(len < k) {
        for(let i = 0; i < k - len; i++) {
            arr.push(-1);
        }
    }
    return arr;
}