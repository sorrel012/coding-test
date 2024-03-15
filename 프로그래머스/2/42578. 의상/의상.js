function solution(clothes) {    
    let clothTypes = {};
    clothes.forEach(([name, type]) => {
        if (!clothTypes[type]) {
            clothTypes[type] = 1; 
        } else {
            clothTypes[type]++; 
        }
    })
    
    let answer = 1;
    for (let type in clothTypes) {
        answer *= (clothTypes[type] + 1); 
    }
    
    return answer - 1; 
}