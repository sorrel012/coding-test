function solution(myString, pat) {
    const regex = new RegExp(`(?=${pat})`, 'g');
    const answer = myString.match(regex);
    return answer ? answer.length : 0;
}
