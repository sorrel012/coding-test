function solution(records) {
    const answer = [];
    const user = new Map();
    
    for(const record of records) {  
        const [type, uid, nickname] = record.split(' ');        
        if (type === 'Enter' || type === 'Change') {
            user.set(uid, nickname);
        }
    }
    
    for (const record of records) {
        const [type, uid] = record.split(' ');        
        if (type === 'Enter') {
            answer.push(`${user.get(uid)}님이 들어왔습니다.`);
        } else if (type === 'Leave') {
            answer.push(`${user.get(uid)}님이 나갔습니다.`);
        }
    }
    
    return answer;
}