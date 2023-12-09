function solution(my_string) {
    let answer = [];
    const lastIndex = my_string.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
        answer.push(my_string.slice(i, lastIndex + 1));
    }
    return answer.sort();
}