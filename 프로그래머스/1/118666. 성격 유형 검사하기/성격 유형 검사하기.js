function solution(survey, choices) {
    const scores = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3,
    }
    
    let result = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0,
    }
    
    choices.forEach((v, i) => {
        let question = survey[i];
        let plus ='';
        if(v < 4) { 
            plus = question.charAt(0);
        } else {            
            plus = question.charAt(1);
        }
        result[plus] += scores[v];        
    })
    
    let answer = ''
    
    if(result['R'] >= result['T']) {
        answer += 'R'
    } else  {
        answer += 'T'
    }
    
    
    if(result['C'] >= result['F']) {
        answer += 'C'
    } else  {
        answer += 'F'
    }
    
    
    if(result['J'] >= result['M']) {
        answer += 'J'
    } else  {
        answer += 'M'
    }
    
    
    if(result['A'] >= result['N']) {
        answer += 'A'
    } else  {
        answer += 'N'
    }
    
    return answer;
}