function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let priceLen = prices.length;

  for(let i = 0; i < priceLen; i++) {
    while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let tmp = stack.pop();
      answer[tmp] = i - tmp;
    }
    stack.push(i);
  }

  while(stack.length) {
    let tmp = stack.pop();
    answer[tmp] = priceLen - tmp - 1;
  }

  return answer;
}
