function solution(arr) {
    if(arr.indexOf(2) === -1) {
        return [-1];
    } else {
        return arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1);
    }
}