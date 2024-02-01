function solution(today, terms, privacies) {
    const term  = terms.reduce((acc, cur) => {
        let [key, value] = cur.split(' ');
        acc[key] = +value;        
        return acc;
    }, {});
    
    let [year, month, date] = today.split('.');
    const now = new Date(year, month-1, date);
    
    let answer = [];
    privacies.forEach((v, i) => {
        let [privacyDate, privacyTerm] = v.split(' ');
        [year, month, date] = privacyDate.split('.');
        let limit = new Date(year, month - 1, date);
        limit.setMonth(limit.getMonth() + term[privacyTerm]);
        
        if(now >= limit) answer.push(i+1);
    })
    
    return answer;
}