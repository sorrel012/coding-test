function solution(n) {
    let numbers = new Array(n+1).fill(1);
    numbers[0] = numbers[1] = 0;
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(numbers[i]) {
            for(let j = i**2; j <= n; j+=i) {
                numbers[j] = 0;
            }
        }
    }
    
    let cnt = 0;
    for (let num of numbers) {
       if (num) cnt++;
    }
    return cnt;
}