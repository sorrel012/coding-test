function solution(prices) {
    let answer = [];
    
    for(let i = 0; i < prices.length; i++) {
        let period = 0;
        for(let j = i+1; j < prices.length; j++) {
            period++;
            if(prices[i] > prices[j]) break;
        }
        answer.push(period);
    }
    
    return answer;
}