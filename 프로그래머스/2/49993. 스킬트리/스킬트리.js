function solution(skill, skill_trees) {
    let answer = 0;    
    
    for (const skills of skill_trees) {
        let skillOrder = skill.split('');
        let valid = true;
        
        for (const s of skills) {
            if (skillOrder.includes(s)) {
                if (s !== skillOrder[0]) {
                    valid = false;
                    break;
                } else {
                    skillOrder.shift();
                }
            }
        }
        
        if (valid) answer++;
    }
    
    return answer;
}