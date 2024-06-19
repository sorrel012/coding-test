function solution(skill, skill_trees) {
    const isCorrect = (item) => {        
        let skillOrder = skill.split('');
        for (let i = 0; i < item.length; i++) {
            if (!skill.includes(item[i])) continue;
            if (item[i] === skillOrder.shift()) continue;
            return false;
        }
        return true;
    }

    return skill_trees.filter(isCorrect).length;
}