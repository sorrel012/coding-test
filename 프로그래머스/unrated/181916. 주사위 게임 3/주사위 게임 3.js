function solution(a, b, c, d) {
    let arr = new Array(7).fill(0);    
    for(let num of [a, b, c, d]) {
        arr[num]++;
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr.filter(num => num !== 0));
    
    let cnt = arr.filter(v => v > 0).length;
    if(cnt === 1) {
        return 1111 * arr.findIndex(el => el !== 0);
    } else if(cnt === 2 && max === 3) {
        return (10 * arr.findIndex(el => el === max) + arr.findIndex(el => el === min)) ** 2;
    } else if(cnt === 2 && max === 2) {    
        const two = arr.map((v, i) => {
            if(v !== 0) {
                return i;
            }
        }).filter(v => v);
        return (two[0] + two[1]) * Math.abs(two[0] - two[1]);
    } else if(cnt === 3) {   
        const two = arr.map((v, i) => {
            if(v !== max && v !== 0) {
                return i;
            }
        }).filter(v => v);
        return two[0] * two[1];
    } else {
        return arr.findIndex(v => v === min);
    }
}