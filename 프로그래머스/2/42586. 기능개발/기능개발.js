function solution(progresses, speeds) {
    let answer = [];    
    let dueDates = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    let deploymentDueDate = dueDates[0]; 
    let deploymentCnt = 1; 
    
    for (let i = 1; i < dueDates.length; i++) {
        if (dueDates[i] <= deploymentDueDate) {
            deploymentCnt++;
        } else {
            answer.push(deploymentCnt);
            deploymentCnt = 1; 
            deploymentDueDate = dueDates[i]; 
        }
    }
    
    answer.push(deploymentCnt);
    
    return answer;
}

