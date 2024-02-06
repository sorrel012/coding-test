function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(v => {return v.split(' ')});
    
    let counts = new Map();
    for (const ids of reports) {
        counts.set(ids[1], counts.get(ids[1])+1 || 1)
    }
    
    let reportResult = new Map();
    for(const ids of reports) {
        if(counts.get(ids[1]) >= k) {
            reportResult.set(ids[0], reportResult.get(ids[0])+1 || 1)
        }
    }
    
    let answer = id_list.map(id => reportResult.get(id) || 0);
    
    return answer;
}
