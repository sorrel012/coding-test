function solution(my_string) {
    let answer = [];
    for(let i = 65; i <= 90; i++) {
        answer.push(my_string.split(String.fromCodePoint(i)).length - 1);
    }
    
    for(let i = 97; i <= 122; i++) {
        answer.push(my_string.split(String.fromCodePoint(i)).length - 1);
    }
    
    return answer;
}