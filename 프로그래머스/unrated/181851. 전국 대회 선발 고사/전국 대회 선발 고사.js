function solution(rank, attendance) {
    let attendanceRankIdx = attendance.reduce((arr, v, i) => {
    if (v) {
        arr.push(i);
    }
    return arr;
}, []);
    
    let attendanceRank = [];
    attendanceRankIdx.forEach(value => {
        let tmp = [];
        tmp.push(rank[value]);
        tmp.push(value);
        attendanceRank.push(tmp);
    })
    
    attendanceRank = attendanceRank.sort((a, b) => a[0] - b[0]);
    
    return 10000 * attendanceRank[0][1] + 100 * attendanceRank[1][1] + attendanceRank[2][1];
}