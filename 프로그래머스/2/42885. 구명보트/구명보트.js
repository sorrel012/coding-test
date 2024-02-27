function solution(people, limit) {
    let answer = 0;  
    let weight = [...people].sort((a, b) => a - b);
    let minIndex = 0, maxIndex = weight.length - 1;
    
    while(minIndex <= maxIndex) {
        answer++;
        if (weight[minIndex] + weight[maxIndex] <= limit) {
            minIndex++; 
        }
        maxIndex--; 
    }
    
    return answer;
}