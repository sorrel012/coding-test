function solution(word) {
    return word.split('').reduce((acc, curr, i) => acc + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(curr) + 1, 0);
}