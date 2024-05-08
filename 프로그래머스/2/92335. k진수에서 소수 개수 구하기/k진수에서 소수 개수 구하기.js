function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0
    let convertedNum = n.toString(k);
    
    for(let i = 0; i < convertedNum.length; i++) {
        let tmp = '';
        for(let j = i; j < convertedNum.length; j++) {
            if(convertedNum[j] === '0') {
                break;
            }
            tmp += convertedNum[j];
            i = j;
        }
        
        if(isPrime(+tmp)) answer++;
        
    }
    
    return answer;
}