function solution(arr) {
  const len = arr.length;
  const totalLen = 2 ** Math.ceil(Math.log2(len));
  return [...arr, ...new Array(totalLen - len).fill(0)];
}
