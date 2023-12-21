function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    let numStr = i.toString();

    if (/^[0|5]+$/.test(numStr)) {
      answer.push(i);
    }
  }

  return answer.length > 0 ? answer : [-1];
}
