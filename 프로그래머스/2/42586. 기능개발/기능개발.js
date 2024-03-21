function solution(progresses, speeds) {
    let answer = [0];    
    let dueDates = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));    
    let maxDate = dueDates[0];

    for(let i = 0, j = 0; i < dueDates.length; i++){
        if(dueDates[i] <= maxDate) {
            answer[j] += 1;
        } else {
            maxDate = dueDates[i];
            answer[++j] = 1;
        }
    }
    
    return answer;
}

