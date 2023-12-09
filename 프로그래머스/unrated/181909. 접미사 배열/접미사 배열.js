function solution(my_string) {
    let answer = [];
    const lastIndex = my_string.length - 1;
    for (let i = 0; i < lastIndex + 1; i++) {
        answer.push(my_string.slice(i, lastIndex + 1));
    }
    return answer.sort();
}