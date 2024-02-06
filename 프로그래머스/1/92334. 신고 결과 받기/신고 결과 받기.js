function solution(id_list, report, k) {    
    let reportResult = {};
    id_list.forEach(id => {
        reportResult[id] = 0;
    });
    
    reportSet = new Set(report);
    report = [...reportSet];
    
    report.forEach((v, i) => {
        const [userId, reportId] = v.split(' ');
        
        reportResult[reportId] += 1;        
        report[i] = [userId, reportId];        
    });
    
    const bannedId = [];
    for (let key in reportResult) {
        if(reportResult[key] >= k) bannedId.push(key);
    }    
    
    return id_list.map(name => {
        let tmp = report.filter(v => v[0] === name).map(v => v[1]);
        let cnt = 0;
        for(let id of tmp) {
            if(bannedId.includes(id)) cnt++;
        }
        return cnt;
    })    
}
