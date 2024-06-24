function solution(records) {
    const answer = [];
    const user = new Map();
    const typeMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    
    for(const record of records) {  
        const [type, uid, nickname] = record.split(' ');      
        
        if (type !== 'Change') {
            answer.push([type, uid]);
        }
        if(nickname) {
            user.set(uid, nickname);            
        }
    }
    
    return answer.map(([type, uid]) => {
        return `${user.get(uid)}${typeMapping[type]}`;    
    })
}



    